function CoffeeMachine(power) {
    this.waterAmount = 0;
    let timerld=0;
	var WATER_HEAT_CAPACITY = 4200;
	var self = this;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffee is ready');
	}
	
    this.run = function() {
        timerld=setTimeout(onReady, getBoilTime());
    };
    
    this.stop= function(){
        clearTimeout(timerld);

        if(timerld != 0)
        {
            console.log("coffee isn't ready")
        }
    };
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); 