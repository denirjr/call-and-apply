// apply takes the arguments as an array.

const animal = {
  name: "Luc",
  kind: "Gummy bear",
};

function speakAnimal(food, country) {
    console.log(
      `my name is ${this.name}, Iam a ${this.kind}. I love eating ${food} and im living in ${country}`
    );
}

speakAnimal.apply(animal, ["cookies", "USA"]);
