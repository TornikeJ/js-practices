function f(a,b,c){
  if (typeof(a) !== 'number') {
    throw new Error('parameter type is not a Number');
  }
  if (typeof(b) !== 'number') {
    throw new Error('parameter type is not a Number');
  }
  if (typeof(c) !== 'number') {
    throw new Error('parameter type is not a Number');
  }

  return (a-b)/c
}
