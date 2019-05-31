const mix = (...functions) => {
    let temp;
    for (const f of functions) {
        temp=f(temp);
    }
    return temp;
};

console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}))