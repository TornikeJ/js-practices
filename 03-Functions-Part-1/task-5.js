function f(){
var newArr=[];

  for(var item of arguments)
  {
      if(isPositive(item)){
          newArr.push(item);
      }
  }

  console.log(newArr);
}

function isPositive(x){
  if (typeof(x) !== 'number') {
    throw new Error('parameter type is not a Number');
  }

  if(x>0)
  {
    return true;
  }
  return false;
}

var arr=[1, 2, -4, 3, -9, -1, 7];
