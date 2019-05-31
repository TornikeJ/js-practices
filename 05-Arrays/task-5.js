function reduce(array, cb, acc){

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }
    if (typeof acc !== 'string' && typeof acc !== 'number') {
        throw new Error('Third parameter required and has to be only string or number');
    }

    var result=0;
 
    for(let i=0;i<array.length;i++)
    {
        if(typeof acc === "string" || typeof arr[i] === 'string')
        {
            result = array.join('');
            break;
        }             
        else{
            result+= arr[i];
        }
    }

    cb(acc,result);
    
}

const arr = [1,2,3,4,5];

const reduced = reduce(arr, function(acc, item, i, arr){
    console.log(acc + item);
    return acc + item;
},'');

console.log(reduced);
