var arr = [1,2,3,4];
var sum = 0;
var member = 0; 

for(member of arr)
{
    if(member % 2 == 0 && member > 3)
    {
        sum += member;
    }
}

console.log(sum);