class Worker {
    constructor(name,surname, rate, days)
    {
        this.name=name;
        this.surname=surname;
        this.rate=rate;
        this.days=days;
    }
    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }
    getRate(){
        return this.rate;
    }
    getDays(){
        return this.days;
    }
    getSalary(){
        return this.days * this.rate; 
    }

    setRate(rate)
    {
        this.rate=rate;
    }
    
    setDays(days)
    {
        this.days=days;
    }
};

var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

// Now using setters:
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10