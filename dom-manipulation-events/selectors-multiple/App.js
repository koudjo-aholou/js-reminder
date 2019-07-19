// # DOM MANIPULATION & EVENTS
console.group("Selectors for Multiple ELements");
//document.getElementsByClassName();

const rupertItem = document.getElementsByClassName('collection-item');

console.log(rupertItem);
console.log(rupertItem[0].innerText);
rupertItem[0].style.color = "red";
rupertItem[3].innerText = "Changement de Texte";

let listRupert = document.querySelector('ul').getElementsByClassName('collection-item');

console.log("querySelector + elementsByClassname",listRupert);

//document.getElementsByTagName();

const rupertItems = document.getElementsByTagName('li');

console.log("elements by tag name",rupertItems);
 console.log(rupertItems[0].innerText);
rupertItems[0].style.color = "red";
rupertItems[3].innerText = "Changement de Texte";

//convert HTML COLLECTION => ARRAY

listRupert = Array.from(listRupert)
listRupert.reverse();

listRupert.forEach(function(rupert, index){
  console.log("forEach",rupert.innerText)
  //rupert.textContent += "Youpi, dansons la carioca";
  rupert.textContent = `Youpi, dansons la carioca ${index} fois`
})

// document.querySelectorAll()
//No need to convert into an Array

const cartman = document.querySelectorAll('ul.collection li.collection-item');
console.log("queryselectorall",cartman);
cartman.forEach(function(kyle, index){
  console.log("forEach",kyle.innerText)
  //rupert.textContent += "Youpi, dansons la carioca";
  kyle.textContent = `Kyle ta mère.... ${index} fois`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(li, index){
  li.style.background = "#ccc";
});

const liEven = document.querySelectorAll('li:nth-child(even)'); 
for(i=0; i<liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.groupEnd("Selectors for Multiple ELements");