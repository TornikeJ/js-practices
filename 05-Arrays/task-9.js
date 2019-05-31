function arrayFill(x,n){

    if ( typeof x !== 'number'  && typeof x !== 'string' && !Array.isArray(x)) {
        throw new Error("Error: First parameter required and has to be only number, string, object array!");
    }
    if (typeof n !== 'number') {
        throw new Error("Error: Second parameter required and has to be only number!");
    }

    var array=new Array(n);

    for(let i=0;i<n;i++)
    {
        array[i]=x;
    }
    
    return array;
}

