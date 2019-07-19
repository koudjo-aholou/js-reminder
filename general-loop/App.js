// # General Loop

//FOR LOOP
console.group("FOR LOOP");
for(let i=0; i < 10; i++){
  if(i === 2){
    console.log("2 pac"+i);
    continue;
  }
  if(i === 5){
    console.log("stop the loop");
    break;
  }
  console.log("Number"+i);
}
console.groupEnd("FOR LOOP");
// WHILE LOOP
console.group("WHILE LOOP");
let i =0;
while( i <= 10){
  console.log(' WHILE Number'+ i)
  i++;
}
console.groupEnd("WHILE LOOP");

// DO WHILE LOOP
console.group("DO WHILE LOOP");

let x = 20;
//DO WHILE se lance toujours même si la condition est réalisée
do{
  console.log("DO WHILE x=20 mais x<19 ds while" + x);
  x++;
}
while(x < 19);
console.groupEnd("DO WHILE LOOP");

//FOR ARRAY
const humus = ["I","LOVE","HUMUS"];

for(i=0; i<humus.length; i++){
  console.log(humus[i],'for')
}

//FOR EACH
humus.forEach(function(humus, index, array){
  console.log("FOR EACH",humus+ " "+ index);
  console.log(array, "voir le tableau avec argument array");
});

//MAP
const occitanie = [{soleil:"true",ville:"Toulouse",id:1},{soleil:"true",ville:"Perpignan",id:2},{soleil:"true", ville:"Narbonne",id:3}];

const villes = occitanie.map(function(occ){
  return occ.ville +" id : "+ occ.id;
});
console.log(villes,"MAP");

console.group("FOR IN LOOP");
// FOR IN LOOP
const town = {
  ville:"Pezenas",
  habitans:15000,
  langue:"Fr"
};
let text = "";
for(let x in town){
  console.log( "keys", x)
  console.log("pour avoir la clef et la valeur",`${x}: ${town[x]}`)
  text += town[x]+ " ";
  console.log(text, '+= rajout la valeur a text');
}
console.groupEnd("FOR IN LOOP");

let spreadableObject = [
  {
    name: 'Robert',
    phone: 'iPhone'
  },
  {
    name: 'Ruppert',
    phone: 'Android'
  }
];
// AJOUT D'UNE PROPRIETE A UN OBJET
let ajout = spreadableObject.map(function(obj){
  let modif = {
    ...obj,
    carModel: 'Peugeot',
    autre:'autres trucs'
  };
  return modif;
})
spreadableObject = ajout;

console.log(spreadableObject,"ajouter prop dans tableau objet")
