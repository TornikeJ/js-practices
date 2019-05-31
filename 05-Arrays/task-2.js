function filter(array,cb){

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    const result=[];

    for(let i=0;i<array.length;i++)
    {
        if(cb(array[i],i,array)===true)
        {
            result.push(array[i]);
        }
    }

    return result;
}

const arr = [1,2,3];

const filtered = filter(arr, function(item, i, arr){
    return item % 2 == 1;
});


console.log(filtered);