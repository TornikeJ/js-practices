function checkSpam(source, example){
    if(typeof source !== 'string')
    {
        throw new Error("The parameter isn't string");
    }
    if(typeof example !== 'string')
    {
        throw new Error("The parameter isn't string");
    }



    return source.includes(example) ? true : 
    source.includes(example.toLowerCase())? true :
    false;
}

console.log(checkSpam('pitter','TER'));
