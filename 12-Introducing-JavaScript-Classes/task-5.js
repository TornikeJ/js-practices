class Validator{
    isEmail(email){
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }
    isDomain(domain){
        var reg = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
        return reg.test(domain);
    }
    isDate(date){
        var reg = new RegExp(/(\d+)(-|\.)(\d+)(?:-|\.)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/);
        return reg.test(date);
    }
    isPhone(phone){
        var reg=new RegExp(/^[\+]?[0-9]{3}[-\s\.]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?$/);
        return reg.test(phone);
    }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country