const getCustomers = (customers,countries) => {
    return new Promise((resolve,reject) => {
        
        for(let customer of customers)
        {
            for(let country of countries)
            {
                if(customer.id===country.id)
                {
                    if(customer.verified===true)
                    {
                        resolve(Object.assign(customer,country));
                    }
                    else{
                        reject('Objects is not verified');
                    }
                }
                else{
                    reject("We don't have information about country for this customer");
                }
            }
        }
    });
};


const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland',
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))


