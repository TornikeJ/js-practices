const person = {};

Object.defineProperties(person, {
    rate: {
        writable: true,
        configurable:false,
        enumarable:false
    },
    salary: {
        get: function()
        {
            const today = new Date();
            return !this.rate ? 0 : this.rate * today.getDate();
        }
    },
});

person.rate=30;
console.log(person.salary); 