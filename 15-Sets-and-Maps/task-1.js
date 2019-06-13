class DB {
    constructor() {
        this.mp = new Map();
    }

    create(obj) {
        this.validateCreate(obj);
        let id = Math.random().toString();
        this.mp.set(id, obj);
        return id;
    }
 
    read(id) {
        if (arguments.length === 0) {
            throw new Error('Required value')
        }
        if (typeof id !== 'string') {
            throw new Error('Required String')
        }
        if (!this.mp.has(id)) {
            return null;
        }
 
        return this.mp.get(id);
    }
 
    readAll() {
        if (arguments.length > 0) {
            throw new Error("Can't input parameter");
        }
        return [...this.mp.values()];
 
    }
    update(id, obj) {
        if (arguments.length !== 2) {
            throw new Error('Required 2 parameteres');
        }
        if (typeof id !== 'string') {
            throw new Error('First parameter required to be a string');
        }
        if (!this.mp.has(id)) {
            throw new Error('Non-existing id is passed');
        }
 
        this.validateUpdate(obj);

 
        for (let i in this.mp.get(id)) {
            if (!(obj.hasOwnProperty(i))) {
                continue;
            }
 
            Object.defineProperty(this.mp.get(id), i,
            {
                value: obj[i]
            }
            );
 
        }
    }
    delete(id) {
        if (typeof id !== 'string') {
            throw new Error('Required String')
        }
 
        if (!this.mp.has(id)) {
            throw new Error('Non-existing id is passed');
        }
 
        this.mp.delete(id);
    }

    validateCreate(obj)
    {
        if (typeof obj !== 'object') {
            throw new Error('Object is invalid')
        }

        const properties=['name','age','country','salary'];

        for(let property of properties)
        {
            if(!obj.hasOwnProperty(property))
            {
                throw new Error(property+' field is required')
            }
        }

        if (typeof obj.name !== 'string' || typeof obj.country !== 'string') {
            throw new Error('Property required to be string');
        }
        if (typeof obj.age !== 'number' || typeof obj.salary !== 'number') {
            throw new Error('Property required to be number');
        }
    }
 
    validateUpdate(obj){
        if (typeof obj !== 'object') {
            throw new Error('Object is invalid')
        }

        if (obj.hasOwnProperty('name') && typeof obj.name !== 'string' || obj.hasOwnProperty('country') && typeof obj.country !== 'string') {
            throw new Error('Property required to be string');
        }
        if (obj.hasOwnProperty('age') && typeof obj.age !== 'number' || obj.hasOwnProperty('salary') && typeof obj.salary !== 'number') {
            throw new Error('Property required to be number');
        }
    }
 }
 
 
 
 const db = new DB();
 
 const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
 };
 
 const id = db.create(person);
 const customer = db.read(id);
 const customers = db.readAll();
 db.update(id, { age: 22 });
 db.delete(id); // true
