// -1-)----------------------------------------------------------------------------
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
// it is set as string so 9 has to be a string

// -2-)----------------------------------------------------------------------------
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello("9"));
// once again name is set as a string so the number has to be in quotes 

// -3-)----------------------------------------------------------------------------
function fullNamecopy(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullNamecopy("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullNamecopy("Jimbo", "Jones", ""));
 // the function did not have its full name and the needs to have every single input 
 // that it is provided to input even if its an empty string

// -4-)----------------------------------------------------------------------------
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 
 // on const jay: it had an "s" missing on belts

// -5-)----------------------------------------------------------------------------
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("First", "Second");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 // const turing = new Ninja{
 //    fullName: "Alan Turing",
 //    firstName: "Alan",
 //    lastName: "Turing"
 // }
 var turing = new Ninja("Alan", "Turing")
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

// -6-)----------------------------------------------------------------------------
var increment = x => {
    x + 1;
}
// This works great:
console.log(increment(3));
var square = x => {
    x * x
};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => {
    return x * y;
}
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(3, 4))
// the functions needed to be closed with curly brackets {}

// -7-)----------------------------------------------------------------------------
class Elephant {
    constructor(public age: number){}
    birthday = () => {
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 
 
 // from this
 // birthday = function() {}
 
 // to this
 // birthday = () => {}