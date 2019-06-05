Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(obj) {
        for(prop in obj) {
            if(typeof obj[prop] !== 'object') {
                if(!this.hasOwnProperty(prop)) {
                    const desc = Object.getOwnPropertyDescriptor(obj, prop);
                    Object.defineProperty(this, prop, desc);
                } else {
                    this[prop] = obj[prop];
                }
            } else if(Array.isArray(obj[prop])) {
                for(let i = 0; i < obj[prop].length; i++) {
                    this[prop].unshift(obj[prop][i]);
                }
            } else {
                this[prop].mergeDeepRight(obj[prop]);
            }
        }

        return this;
    }
});

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    },
};

let source = {
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
};

const f = data.mergeDeepRight(source);

console.log(JSON.stringify(f));

const o = {
	name: 'fred',
	age: 40,
	contact: {
		email: 'baa@example.com',
        favorite: true,
		meta: {
            verified: true,
            tags: ['vip', 'important']
        }
	}
}