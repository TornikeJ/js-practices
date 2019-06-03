function extractCurrencyValue(amount){
    if(typeof amount !== 'string')
    {
        throw new Error("The parameter isn't string");
    }
    
    let result=amount.replace("$","");

    return parseInt(result,Int16Array);
}

console.log(extractCurrencyValue("12$"));