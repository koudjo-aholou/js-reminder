// # Functions declaration && Expressions

function blanquette(prenom,prenom2){
  if(typeof prenom === "undefined"){prenom = "Jojo Pose"};
  if(typeof prenom2 === "undefined"){prenom2 = "Jean Pierre PolNareff"};
  return `${prenom} Comment est votre blanquette ? et vous ${prenom2}`;
}
console.log(blanquette("John","Rupert"));

//si pas d'argument possibilité de directement les rentrer dans la fonction
function default2(test1 ='non rentré', test2 = 'non rentré aussi'){
  return `${test1} Comment est votre blanquette ? et vous ${test2}`;
};
console.log(default2());

//Function expression

const carre = function(x){
  return x*x;
};
console.log(carre(4));

//IMMIDIATELY INVOKABLE FUNCTION IIFEs
(
  function maintenant(age){
  console.log("IIfE runs"+age)
  }
)("77 ans");
