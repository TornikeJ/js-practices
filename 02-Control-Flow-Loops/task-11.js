var arr = [10,9,8,7,6,5,4,3,2,1];
var member;
var temp;

for(var i=0;i<10;i++)
{
    var min=arr[i];

    for(var j=i;j<10;j++)
    {
        if(min>=arr[j])
        {
            min=arr[j];
            member=j;
        }
    }

    temp=arr[i];
    arr[i]=min;
    arr[member]=temp;
}

for(var i of arr)
{
    console.log(i);
}