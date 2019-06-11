class MyString{
    reverse(string){
        return string.split('').reverse('').join('');
    }
    ucFirst(string){
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
    ucWords(string){
        const self=this;

        let transformed=string.split(' ').map(function(name){
            return self.ucFirst(name)
        });

        return transformed.join(' ');
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'