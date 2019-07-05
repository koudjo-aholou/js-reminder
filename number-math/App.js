// # Number and MathObject
const numb1 = 90;
const numb2 = 10;
let val;

//Simple Math with number
val = numb1 + numb2;
val = numb1 % numb2; // Remainder % integer division

// # Math Object
val = Math.PI;
val = Math.E;
val = Math.round(9.9);
val = Math.ceil(9.1); // arrondie a la hausse
val = Math.floor(2.9); // arrondie à la baisse
val = Math.sqrt(4);
val = Math.abs(-3 -5); //8
val = Math.pow(5,2); //25 5^2
val = Math.min(1,88,99); //1
val = Math.max(1,88,99); //99
val = Math.floor(Math.random()*100+1); // nb aleatoire jusqu a 100 entier

//console.log(val);

// # Strings @ concatenation
 const firstName = "Marla";
 const lastName = "Singer";
 const str = "Bonjour Comment est votre blanquette ?";
 const tag ="Shonen,Seinen, Shôjo Romance, Magical Shôjo";

//Concatenation
  console.group("Concatenation, Append, Escaping, Indexof, Chartat, substring, slice, split, replace")
  let user;
   user = firstName + " "+ lastName; //conca 1
   console.log(user,"concatenation 1");

   user = firstName.concat(' ', lastName); //concatenation 2
   console.log(user,"concatenation 2");

//Append
  user = "Robert "
  user+= "Paulson" // Robert paulson
  console.log(user,"Append");

//Escaping
  user = 'That\'s Awesome How is your Blanquette ?'
  console.log(user);

  //Indexof
    user = firstName.indexOf('a');
    console.log(user, "indexof");
    user = firstName.lastIndexOf('a');
    console.log(user, "lastIndexof");

//Chartat()
  user = firstName.charAt('4'); //last a

//Get last char
  user = firstName.charAt(firstName.length -1)
  console.log(user, "chartAt");

//substring()
  user = firstName.substring(0,1); //first
  console.log(user, "substring");
//slice
  user = lastName.slice(0,6);
  user = lastName.slice(-1); //slice start at the end
  console.log(user, "slice like substring");

//split
  user  = str.split(' ');
  user = tag.split(',');
  console.log(user, "split");

  //replace()
  user = str.replace("blanquette","*****")
  console.log(user, "replace");

  user = str.includes("blanquette");
  console.log(user, "include");
 console.groupEnd("Concatenation, Append, Escaping, Indexof, Chartat, substring, slice, split, replace")