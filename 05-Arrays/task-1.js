// forEach(arr, function(item, i, arr) {});

const arr = [1,2,3];

function forEach(a,cb){
    if(!(Array.isArray(a)))
    {
        throw new Error('First parameter required and has to be only array');
    }
    if(typeof cb !== 'function')
    {
        throw new Error("Second parameter required and has to be only function");
    }

    
    for(let i=0; i<a.length;i++)
    {
        cb(arr[i],i,arr);
    }

}

forEach(arr,

    function(item,i,arr){
    console.log(item + ' ' + i + ' ' + arr);
}

);
