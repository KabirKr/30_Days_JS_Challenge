const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I'm a %s string!", "POP");
let x = 23;
console.log(`I'm ${x}`);

// Styled
console.log(
  "%c I'm some great text",
  "font-size: 20px; background: red; color: #fff; text-shadow: 2px 2px 0 blue"
);

// warning!
console.warn("OH NOO!");

// Error :|
console.error("Shit");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing

// console.assert only fires when something is wrong
console.assert(1 === 1, "That is wrong!");

console.assert(1 === 2, "That is wrong!");

const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together

// console.group()
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// console.groupCollapsed()
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

console.clear();

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");

console.clear();
// timing

console.time("fetching data");
fetch("https://api.github.com/users")
  .then(res => res.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
