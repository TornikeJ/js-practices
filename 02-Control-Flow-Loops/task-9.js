var count=0;

for(var i=2; i<10; i++)
{
    for(var j=2; j<10; j++)
    {
        if ( i % j == 0)
        {
            count++;  
        }
    }

    if(count < 2)
    {
        console.log(i);  
    }

    count=0;
}

