function f(array){

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }

    if(array.length !==0)
    {
        console.log(array[0]);
        array.splice(0,1);
        
        if(array.length>0)
        {
            f(array);
        }
        else{
            return;
        }
    }
    else{
        throw new Error('function can accept only a non-empty array');
    }
}
