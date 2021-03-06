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
 
        this.validate(obj);
 
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
    
        find(query)
        {
            this.validateQuery(query);
            
            let original=[...this.mp.values()];
            let result=[];

            for(let item of original)
            {   
                if(query.name === item.name&&query.country===item.country)
                {
                    if(query.hasOwnProperty('age') === item.hasOwnProperty('age') && query.hasOwnProperty('salary') === item.hasOwnProperty('salary'))
                    {
                        if(((query.age.min<=item.age || query.age.min === undefined) && (query.age.max>=item.age || query.age.max === undefined ))&&((query.salary.min<=item.salary||query.salary.min === undefined) && (query.salary.max>=item.salary||query.salary.max===undefined)))
                        {
                            result.push(item);
                        }
                        
                    }
                }
            }
            return result;
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

    validateQuery(query){
        if (typeof query !== 'object') {
            throw new Error('Object is invalid')
        }

        if (query.hasOwnProperty('name') && typeof query.name !== 'string' || query.hasOwnProperty('country') && typeof query.country !== 'string') {
            throw new Error('Property required to be string');
        }
        if (query.hasOwnProperty('age') && typeof query.age === 'object' ){
            if(query.age.hasOwnProperty('min'))
            {
                if (typeof query.age.min !== 'number') {
                    throw new Error('Property required to be number')
                }
            }
            if(query.age.hasOwnProperty('max'))
            {
                if (typeof query.age.max !== 'number') {
                    throw new Error('Property required to be number')
                }
            }
            if((!query.age.hasOwnProperty('min'))&&(!query.age.hasOwnProperty('max'))){
                throw new Error('Required min or max property')
            }
        }
        else{
            throw new Error('Property required to be object');
        }
        if (query.hasOwnProperty('salary') && typeof query.salary === 'object' ){
            if(query.salary.hasOwnProperty('min'))
            {
                if (typeof query.salary.min !== 'number') {
                    throw new Error('Property required to be number')
                }
            }
            if(query.salary.hasOwnProperty('max'))
            {
                if (typeof query.salary.max !== 'number') {
                    throw new Error('Property required to be number')
                }
            }
            if((!query.salary.hasOwnProperty('min'))&&(!query.salary.hasOwnProperty('max'))){
                throw new Error('Required min or max property')
            }
        }
        else{
            throw new Error('Property required to be object');
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
//  const customers = db.readAll();
//  db.update(id, { age: 22 });
//  db.delete(id); // true


 const query = {
    name:'Pitter',
    country: 'ge',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query); // array of users
console.log(customers);