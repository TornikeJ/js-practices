

function getDivisors(x){
    var arr=[];
    
    if (typeof(x) !== 'number') {
      throw new Error('parameter type is not a Number');
    }
    
    if (x === 0) {
        throw new Error("Error: parameter can't be a 0");
    }
    
    for(let i=0; i<=x;i++)
    {
        if(x % i === 0)
        {
            arr.push(i);
        }
    }
    
    return arr;
}

