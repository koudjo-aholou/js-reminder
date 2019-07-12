// WINDOW METHODS / OBJECTS / PROPERTIES
console.log(1234)
window.console.log("window.console.log",123);

//ALERT
//window.alert("j'aime les fruits au sirop");
//alert("j'aime les fruits au sirop");

//PROMPT
// const input = prompt();
// alert(input);

//CONFIRM

// if(confirm("Confirmer ?")){
//   alert("Vous avez confirmé  à l'ancienne ;) ")
// }else{
//   alert("Vous n'avez pas confirmé!")
// };
let val;
// Outer height and width
val = window.outerHeight;
val = window.outerWidth;
console.log(val,"outer")

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;
console.log(val,"inner")

// Scroll Points
val = window.scrollY;
console.log(val, "scrollY");

// Location Object
val = window.location;
val = window.location.port;
val = window.location.hostname;
val = window.location.href;
val = window.location.search;

//Redirect
//val =window.location.href = "https://www.google.fr";

//Reload
//val = window.location.reload();
console.log(val, "window Location");

//History object
//val = window.history.go(-2)
//val = window.history.length;
console.log(val, "window history");

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val,"navigator")

