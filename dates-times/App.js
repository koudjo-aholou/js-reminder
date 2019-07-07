// # Dates & Times
let val;
const aujourdhui = new Date();
let anniversaire = new Date('12-12-1989 12:09');
 anniversaire = new Date('6 july 2019'); //marche directement en fr mais log en anglais
val = aujourdhui.getMonth(); //0-11 0 janvier - 11 Décembre
val = aujourdhui.getDate();
val = aujourdhui.getDay(); //0 Dimanche - 6 samedi
val = aujourdhui.getFullYear();
val = aujourdhui.getHours();
val = aujourdhui.getMinutes();
val = aujourdhui.getSeconds();
val = aujourdhui.getMilliseconds();
val = aujourdhui.getTime(); //Time stamp
val = anniversaire.setFullYear(3000); //marche avec une date fixée
val = anniversaire.setMonth(0);
val = anniversaire.setDate(30); 
val = anniversaire.setHours(3);
val = anniversaire.setMinutes(55);
val = anniversaire.setSeconds(30);

console.log(val, typeof aujourdhui, anniversaire);

