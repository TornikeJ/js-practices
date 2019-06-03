function truncate(string, maxlength){
    if(typeof string !== 'string')
    {
        throw new Error("The parameter isn't string");
    }
    if(typeof maxlength !== 'number')
    {
        throw new Error("The parameter isn't number");
    }

    if(string.length>maxlength)
    {
        return string.substring(0,maxlength) + "...";
    }

    return string;
}

console.log(truncate('pitter',7));