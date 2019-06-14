const getCustomers = (customers,countries) => {
    return new Promise((resolve,reject) => {
        
        let result = [];
        let check=0;
        
        for(let customer of customers)
        {

            for(let country of countries)
            {
                if(!customer.hasOwnProperty('id'))
                {
                    console.log(check);
                    if(check===countries.length-1)
                    {
                        reject("We don't have information about country for this customer");
                    }
                    check++;
                    break;
                }
                                  
                if(customer.verified===true && customer.id===country.id)
                {
                    result.push(Object.assign(customer,country))
                }
            }
        }
        if(result.length>0)
        {
            resolve(result);
        }
        reject('Objects is not verified');
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
        name: 'alex',
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


