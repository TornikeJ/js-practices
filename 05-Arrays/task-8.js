function f(array){

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }
    
    const modifiedArr=array.flat(Infinity)
    var sum=0;

    for(let i=0;i<modifiedArr.length;i++)
    {
        sum += modifiedArr[i];
    }

    return sum;
}

