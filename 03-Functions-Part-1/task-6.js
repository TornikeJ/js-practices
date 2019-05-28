function isEven(x){
  
  if (typeof(x) !== 'number') {
    throw new Error('parameter type is not a Number');
  }

  if(x%2 == 0)
  {
    return true;
  }

  return false;
}

