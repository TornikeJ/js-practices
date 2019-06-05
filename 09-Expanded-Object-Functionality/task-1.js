Object.defineProperty(Object.prototype, 'extend', {
    value(source) {
        const keys = Object.getOwnPropertyNames(source);
        for(const k of keys) {
            if(!this.hasOwnProperty(k)) {
                const attributes = Object.getOwnPropertyDescriptor(source, k);
                Object.defineProperty(this, k, attributes);
            }
        }
    }
});

const data = { a: 'a' };
const source = { a: 'A', b: 'b'};

//source.__proto__ = {c:'c'};

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false

