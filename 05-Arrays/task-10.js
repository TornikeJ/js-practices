function reverse(array){

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }

    if(array.length ===0)
    {
        throw new Error('function can accept only a non-empty array');
    }

    let reversedArr=[];

    for(let i=array.length-1; i>=0; i--)
    {
        reversedArr.push(array[i]);
    }

    return reversedArr;
}

const arr = [3,2,1];

reverse(arr);

