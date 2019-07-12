// #  GLOBAL SCOPE
var rupert = "Tyler";
let marla = "Rupert";
const tyler = "Marla";
var a = 1;
// function test(){
//   var rupert = 1;
//   let marla = 2;
//   const tyler = 3;
//   console.log("Function Scope: "+ rupert +", "+ marla +", " + tyler);
// };
// test();

// if(true){
//   //BLOCK SCOPE
//   var rupert = 1; 
//   let marla = 2;
//   const tyler = 3;
//   console.log("If Scope: "+ rupert +", "+ marla +", " + tyler);
// }

for(let a =0; a<10; a++){
  console.log(`Loop ${a}`);

}
console.log("Global Scope: "+ a +" "+rupert +", "+ marla +", " + tyler, "var global se fait ecraser avec un if scope var", "meme comportement avec for et var");