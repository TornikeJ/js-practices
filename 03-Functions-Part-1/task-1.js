function f(x) {
    if (typeof(x) !== 'number') {
      throw new Error('parameter type is not a Number');
    }

    var result = x * x * x;

    return result;
  }
