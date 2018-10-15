function dog(name, age) {
  this.name = name;
  this.age = age;
  this.type="dog";
  this.image="dog.png";
}

function elephant(name, age) {
  this.name = name;
  this.age = age;
  this.type="elephant";
  this.image="elephant.png";
}

function turtle(name, age) {
  this.name = name;
  this.age = age;
  this.type="turtle";
  this.image="turtle.png";
}

var animals = [new dog(), new elephant(), new turtle()];
var names = ["blep", "elephante", "tortellini"];

function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	randomIndex = generateRandomIndex(names.length);
  name = names[randomIndex];
  return name;
}

function generateRandomAge() {
  return generateRandomIndex(20);
}

function generateRandomAnimal() {
  randomIndex = generateRandomIndex(animals.length);
  animal = animals[randomIndex];
  if (animal instanceof dog)
    return new dog(generateRandomName(), generateRandomAge());
  else if (animal instanceof elephant)
    return new elephant(generateRandomName(), generateRandomAge());
  else if (animal instanceof turtle)
    return new turtle(generateRandomName(), generateRandomAge());
  return 1;
}

$(document).ready(function() {
    var animal = generateRandomAnimal();
    // fill in code
  }


