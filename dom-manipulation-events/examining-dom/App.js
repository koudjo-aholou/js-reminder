// # DOM MANIPULATION & EVENTS : Examining the dom
console.group("Examining the dom");
let val;

val = document;
console.log("document",val);

val = document.all;
val = document.all[1];
console.log(" document.all => access to the collection like an array",val);

val = document.all.length;
val = document.head;
val = document.body;
val = document.title;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
console.log(" document. length, head, body...",val);

val = document.forms;
console.log(" Select",val);
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
console.log("Select forms",val);

val = document.links;
val = document.links[0].className;
val = document.links[0].classList;
console.log("Select links",val);

val = document.images;

val = document.scripts;
val = document.scripts[1].getAttribute('src');

console.log("Select images, scripts",val);

//Parcourir un tableau
let scripts = document.scripts;
let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script){
  console.log(script);
  console.log(script.getAttribute('src'));
})
console.groupEnd("Examining the dom");