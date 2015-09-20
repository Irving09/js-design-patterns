/*
The purpose of the factory is to create objects.

It’s usually implemented in a class or a static method of a class, which has the following purposes:

	• Performs repeating operations when setting up similar objects
	• Offers a way for the customers of the factory to create objects without knowing the specific type (class) at compile time
*/

function CarMaker() {}

CarMaker.prototype.drive = function() {
	return "Vroom, I have " + this.doors + " doors";
};

CarMaker.factory = function(type) {
	var constr = type;
	var newcar;

	if (typeof CarMaker[constr] !== 'function') {
		throw {
			name: "Error",
			message: constr + " doesn't exist"
		}
	}

	// at this point the constructor is known to exist
	// let's have it inherit the parent but only once
};