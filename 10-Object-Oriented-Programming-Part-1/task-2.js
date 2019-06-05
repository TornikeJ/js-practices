function CoffeeMachine(power, capacity) {
    
    const powerVal=power;

	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
    };
    
    this.getPower = function() {
        return powerVal;
    };
}

var coffeeMachine = new CoffeeMachine(100,250);
