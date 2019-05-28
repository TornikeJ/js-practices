function f(n) {

  if(typeof n !=='number') {
      throw new Error("Error: parameter type is not a Number");
  }

  switch (n) {
      case 1:
          return "კვირა";
      case 2:
          return "ორშაბათი";
      case 3:
          return "სამშაბათი";
      case 4:
          return "ოთხშაბათი";
      case 5:
          return "ხუთშაბათი";
      case 6:
          return "პარასკევი";
      case 7:
          return "შაბათი";
      default:
        throw new Error("Error: parameter should be in the range of 1 to 7");
  }
}

