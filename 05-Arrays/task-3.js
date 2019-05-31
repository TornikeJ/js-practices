function every(array,cb){

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    for(let i=0;i<array.length;i++)
    {
        if(cb(array[i],i,array)===false)
        {
            return false;
        }
    }

    return true;
}

const arr = [1,2,3];

const result = every(arr, function(item, i, arr){
    return item % 2 == 1;
});


console.log(result);