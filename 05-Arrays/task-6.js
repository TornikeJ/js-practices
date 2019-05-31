function reduceRight(array, cb, acc){

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }
    if (typeof acc !== 'string' && typeof acc !== 'number') {
        throw new Error('Third parameter required and has to be only string or number');
    }

    let result=0;
 
    for(let i=array.length-1;i>=0;i--)
    {
        if(typeof acc === "string" || typeof arr[i] === 'string')
        {
            array.reverse();
            result = array.join('');
            break;
        }             
        else{
            result += arr[i];
        }
    }

    cb(acc,result);
    
}

const arr = [1,2,3,4];

reduceRight(arr, function(acc, item, i, arr){
    return acc + item;
},'');

