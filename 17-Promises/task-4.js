const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

class Countries {
    constructor(url) {
        if (typeof url !== 'string') {
            throw new Error('Input must be a string')
        }
        this.url=url;
    }
    send(val) {
        if (typeof val !== 'number') {
            throw new Error('Input must be a number')
        }
        return new Promise((resolve, reject) => {
            get(this.url+'?size='+val, (error, meta, body) => {
                if (meta.status == 200) {
                    const { data } = JSON.parse(body);
                    resolve(data)
                } else {
                    reject(`We have error, status code: ${meta.status}`)
                }
            })
        });
    }
}

const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})(); 