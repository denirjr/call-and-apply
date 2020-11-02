//call requires the arguments to be passed in one-by-one

const animal = {
    kind: "cat",
    name: "Woody"
}

function speak() {
    console.log(`i am a ${this.kind} and my name is ${this.name}`);
}

// here we refer to the global object to get this objject reference.
speak.call(animal);

