function upperCaseFirst(string){
    if(typeof string !== 'string')
    {
        throw new Error("The parameter isn't string");
    }

    let firstLetter=string.toUpperCase();
    
    return firstLetter[0] + string.substring(1);
}

console.log(upperCaseFirst('Pitter'));