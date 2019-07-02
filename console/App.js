console.time("Temps necessaire recup H2");
const allH2 = document.querySelectorAll(('h2'))

//CONSOLE

// Afficher le texte des h2
for(i=0; i<allH2.length; i++){ document.write(allH2[i].textContent +" ")}
console.log(allH2,document.querySelector(('h1')));
//console.table(allH2);
console.warn("warn console created");
console.error("error console created");
console.timeEnd("Temps necessaire recup H2");

//grouper console log
console.group("Groupe 1 console log")
console.log(1)
console.log(2)
console.log(3)
console.groupEnd("Groupe 1 console log");

console.log("autre console log");

//LET CONST VAR

let tylerDurder; //ok
var marlaSinger; // ok
//const robertPaulson; //!error not possible with const

const robertPaulson = {alive :true};
const pair = {isNameIs: "Paulson"};
console.log("Robert",robertPaulson)
robertPaulson.alive = false; //*ok
console.log("Dead Robert",robertPaulson)
//robertPaulson.isNameIs = "Robert Paulson"; // * working with const
//console.log(robertPaulson, "2 proprieties");

Object.assign(robertPaulson, {isNameIs: "Robert Paulson"}); // *working with const Object assign
//robertPaulson = {...robertPaulson, ...pair }  // !not working with const spread operator
console.log(robertPaulson, "2 proprieties bis");