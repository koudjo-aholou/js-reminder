// # If Statement & Comparison operators
console.group("If statement Operators")
const id = 66;

//EQUAL TO ; 11 =="11" doesn t matter string or number
if(id == "66"| id==66){
  console.warn("id == 66");
}

//NOT EQUAL TO
if(id != 66 | id != "66"){
  console.error("id != 66");
}

//EQUAL TO VALUE & TYPE
if(id === 66){
  console.warn("correct type and value");
}

if(id !=="66"){
  console.error("wrong type good value");
}

// Test if undefined
if(typeof id !== undefined){
  console.log(`The id is ${id}`);
}else{
  console.log("no id"); 
}

// Greater of less than
if(id >= 66){
  console.log(`The id is ${id} >= `);
}else{
  console.log("id <"); 
}
if(id <= 65){
  console.log(`The id is ${id} <= inf 66`);
}else{
  console.log("id > superior"); 
}

// ELSE IF
const couleur = "bleu";

if(couleur === "jaune"){
  console.log("la couleur est jaune");
}else if( couleur === "rouge"){
  console.log("la couleur est rouge");
}else{
  console.log("la couleur n est pas jaune ou rouge");
}

//  IF  ELSE Ternary
couleur === "jaune" ? console.log("En ternaire la couleur est jaune") : console.log(" En ternaire la couleur n est pas jaune");

// ELSE IF Ternary (juste envie de me pendre à lire ça...)
couleur === "jaune" 
  ? console.log("En ternaire else if la couleur est jaune") 
  : 
  (
    (couleur === "rouge") 
    ? console.log(" En ternaire else if la couleur est rouge") 
    : 
    (
      console.log(" En ternaire else if la couleur n est pas jaune ou rouge")
    )
  );

//LOGICAL OPERATORS
const nom = "Toto";
const age = 12;

// AND &&
//! un &  et binaire
if(age >=0 & age <= 12){ // si 0 | 12 adulte sans >=
  console.log(`${nom} est un enfant`);
}else if(age >=13 && age <= 17){
  console.log(`${nom} est un ado`);
}else{
  console.log(`${nom} est un adulte`);
};

//OR ||
//! un | ou binaire
if(age <16 || age < 65){
  console.log(`${nom} ne peut pas participer à la course`);
}else{
  console.log(`${nom} peut participer à la course`);
}

//Without Braces
if(age <16 || age < 65)
  console.log("sans {} mauvaise pratique mais marche",`${nom} ne peut pas participer à la course`);
else
  console.log("sans {} mauvaise pratique mais marche",`${nom} peut participer à la course`);

console.groupEnd("If statement Operators")

//# SWITCH
//comme if else, bien si bcp de else if
console.group("SWITCH")
const ciel = "bleu";

switch(ciel){
  case "bleu" :
    console.log(`Le ciel est ${ciel}`);
    break;
  case "rouge" :
    console.log(`Le ciel est ${ciel}`);
    break;
  default:
    console.log("Couleur ni bleu ni rouge ????");
  break;
}
 
let jourA;
switch(new Date().getDay()){
  case 0 :
       jourA = "Dimanche";
    break;
  case 1 :
       jourA = "Lundi";
    break;
  case 2 :
       jourA = "Mardi";
    break;
  case 3 :
       jourA = "Mercredi";
    break;
  case 4 :
       jourA = "Jeudi";
    break;
  case 5 :
       jourA = "Vendredi";
    break;
  case 6 :
       jourA = "Samedi";
    break;
}
console.log(`Nous sommes ${jourA}.`)
console.groupEnd("SWITCH")