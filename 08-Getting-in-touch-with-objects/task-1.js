const person = {
    get salary() {
        const today = new Date();
        const totalDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        return totalDays - today.getDate() > 20 ? 'good salary' : 'bad salary';
    }
}

console.log(person.salary); 