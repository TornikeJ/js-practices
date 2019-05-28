function f(x){
  var result = 0;
  for(var item of arguments)
  {
      if(typeof(item)==='number') {
          result=result+item;
      }
      else {
          throw new Error('all parameters type should be a Number');
      }
  }
  return result;
}
