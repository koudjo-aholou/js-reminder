// #Template literals
const prenom = "Koudjo";
const nom = "AHOLOU";
const age = 66;
const ville = "Pieusse";
const job = "developpeur web";
let html;

function hello(){
  return 'hello';
};

//without template string (es5)
html = '<ul><li>Prenom : '+ prenom + '</li><li>Age : '+ age + '</li><li>Job : '+ job + '</li><li>Ville : '+ ville + '</li></ul>';

//mieux mais pas super agréable
html = '<ul>'+
        '<li>Prenom : '+ prenom + '</li>'+
        '<li>Age : '+ age + '</li>'+
        '<li>Job : '+ job + '</li>'+
        '<li>Ville : '+ ville + '</li>'+
      '</ul>';

//With template strings
//beaucoup plus lisble et simple avec les ``
html = `
  <ul>
    <li>Prenom : ${prenom}</li>
    <li> Age : ${age}</li>
    <li>Job : ${job}</li>
    <li>Ville : ${ville}</li>
    <li>${2+2}</li>
    <li>${hello()} function</li>
    <li>${age > 30 ? "Vous avez plus de 30 ans" : "Vous avez moins de 30 ans"}</li>
    <li>Chiffre aléatoire : ${Math.floor(Math.random()*100)}</li>
  </ul>`;

document.body.innerHTML = html;