var animals = ["тигр", "медведь"];
var fruits  = ["дыня", "апельсин"];
var dishes  = ["тарелка", "бокал", "чашка"];

var whereIsTheTiger = animals.indexOf("тигр");
var fruitsAndAnimals = fruits.concat(animals);

document.write(animals + "<br>");
document.write("Индекс тигра: " + whereIsTheTiger + "<br>");

document.write(fruitsAndAnimals + "<br>");

whereIsTheTiger = fruitsAndAnimals.indexOf("тигр");
document.write("Индекс тигра: " + whereIsTheTiger + "<br>");