// Instance in a static property

/*
	var uni = new Universe();
	var uni2 = new Universe();
	uni === uni2; //true

*/

function Universe() {
	if (typeof Universe.instance === 'object') {
		return Universe.instance;
	}

	this.start_time = 0;
	this.bang = 'Big';

	// cache
	Universe.instance = this;

	// implicit return;
	// return this;
}

// instance in a closure

var Developer;

(function() {
	var instance;
	Developer = function Developer() {
		if (instance) {
			return instance;
		}

		instance = this;
		this.salary = 70000;
		this.name = 'Inno';
	}
})();