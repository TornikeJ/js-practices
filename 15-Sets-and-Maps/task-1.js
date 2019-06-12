class DB{
    constructor()
    {
        this.mp=new Map();
    }

    create(obj){
        if(typeof obj !== 'object')
        {
            throw new Error('Object is invalid')
        }
        
        let id='user'+this.mp.size;
        this.mp.set(id,obj);
        return id; 
    }

    read(id)
    {
        if(arguments.length === 0)
        {
            throw new Error('Required value')
        }
        if(typeof id !== 'string')
        {
            throw new Error('Required String')
        }
        if(!this.mp.has(id))
        {
            return null;
        }

        return this.mp.get(id);
    }

    readAll()
    {
        if(arguments.length > 0)
        {
            throw new Error("Can't input parameter");
        }

        return this.mp.entries();

    }
    update(id,obj){
        if(arguments.length !== 2)
        {
            throw new Error('Required 2 parameteres');
        }
        if(typeof id !== 'string')
        {
            throw new Error('First parameter required to be a string');
        }
        if(typeof obj !== 'object')
        {
            throw new Error('Second parameter required to be an object');
        }
        if(!this.mp.has(id))
        {
            throw new Error('Non-existing id is passed');
        }

        for(let i in this.mp.get(id))
        {   
            if(!(obj.hasOwnProperty(i)))
            { 
                continue;
            }

            Object.defineProperty(this.mp.get(id),i,
                {
                    value: obj[i]
                }
            );

        }
    }
    delete(id)
    {
        if(typeof id !== 'string')
        {
            throw new Error('Required String')
        }

        if(!this.mp.has(id))
        {
            throw new Error('Non-existing id is passed');
        }

        this.mp.delete(id);
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
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true