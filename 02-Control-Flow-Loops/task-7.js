var arr = [1,2,3,4];
var sum = 0;
var member = 0; 

for(member of arr)
{
    if(member % 2 == 0)
    {
        sum += member;
    }
}

console.log(sum);