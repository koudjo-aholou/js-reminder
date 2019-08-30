 //Object Oriented
 
 // Constructor + this keyword"
 console.group("constructor + this keyword");
 //Person constructor
 function Person(name,dob, city){
  this.name = name;
  this.birthday = new Date(dob)
  this.city = city;

  //method function inside an object

  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  console.log(this.calculateAge(),"this calculateAge");
  console.log(this, "this");
 }

 console.log(this);

 const tyler = new Person("Tyler","9-10-1981","Los Angles"),
       marla = new Person("Marla","9-10-1980","Los Angles"),
       robert = new Person("Robert","9-10-1961","Los Angles");

 console.log(marla, "const marla");
 console.groupEnd("constructor + this keyword");

//////////////////////////////////////////////////////////////////////////////
//Built in Constructor
console.group("Buit in Constructor");

//String Primitive value && Object
const name1 = "Tyler",
      name2 = new String("Tyler");

//name2.age ="undefined";
//console.log(name2);
console.log(typeof(name2));  

//console log yes
name1 === "Tyler" ? console.log("YES") : console.log("NO");

//console.log no because not the same type ===
name2 === "Tyler" ? console.log("YES") : console.log("NO");

//Number primitive
const numb1 = 11,
      numb2 = new Number(11);
console.log(numb2, "object : Number");

//Boolean primitive
const bool1 = true,
      bool2 = new Boolean(false);
console.log(bool2, "object : Boolean");   

//Function
const getSum1 = function(x,y){
  return x+y
};
const getSum2 = new Function('x','y','return 1+1');

console.log(getSum1(1,1));
console.log(getSum2(1,1));
//Same type return YES
getSum2(1,1) === 2 ? console.log("YES"):console.log("NO");

//Object
const rupert = {
  name:"Rupert",
  age: 45,
  city: "Los Angles"
};
const rupert2 = new Object({name:"Rupert"});

//Arrays
const arr1 = [1,2,3]
      arr2 = new Array(1,2,3);
console.log(arr1, arr2);

//Regular Expressions
const re1 = /\w+/;

const re2 = new RegExp('\\w+');
console.log(re1,"regular expression /w+/");
console.log(re2,"new RegExp /\w+/ , to have the same re1 2 antislash");

console.groupEnd("Buit in Constructor");
