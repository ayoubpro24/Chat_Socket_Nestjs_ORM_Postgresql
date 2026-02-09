// what learn new stuff! 
// object literal

interface Person 
{
    name: string;
    age: number;
}

interface Home 
{
    Person : Person;
}

function apa(home : Home)
{
    console.log(`Hello , ${home.Person.name}!`);
    home.Person.age++;
    console.log(`your age is ${home.Person.age}`);
}

const test: Home = {
    Person : {
        name : "ayoub",
        age : 23
    }
}

apa(test);

// decoration '@'

function Logger(target: any) {
  console.log("Class created:", target.name);
}
@Logger
class Apa {}


// arrow function 

const opo = (a : number,b : number) => {return a + b};

console.log("result : ", opo(3,4));
const numbers = [1,2,3,4];
const doubled = numbers.map((n) => n * n);
console.log(doubled)


// Array Destructuring

const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];
const [fruit1, , fruit3] = fruits;

console.log(fruit1);
console.log(fruit3); 

const [,, third] = [10, 20, 30]; // third = 30
const [one, ...all] = [1,2,3,4,5]
console.log("one : " , one, " | all : " , all);

