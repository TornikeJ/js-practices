var arr = [1,2,3,4,5,6,7,8,9,10];
var member;
var temp;

for(var i=0;i<10;i++)
{
    var max=arr[i];

    for(var j=i;j<10;j++)
    {
        if(max<=arr[j])
        {
            max=arr[j];
            member=j;
        }
    }

    temp=arr[i];
    arr[i]=max;
    arr[member]=temp;
}

for(var i of arr)
{
    console.log(i);
}