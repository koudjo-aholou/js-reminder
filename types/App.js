// # 6 Primitives Data Types 

console.group("primitive");
  //String
  const name = "Robert Paulson";
  console.log(typeof name, "log name");

  //Number
  const age = 45;
  console.log(typeof age, "log age");

  //Boolean
  const like = true;
  console.log(typeof like, "log like");

  //Null
  const css = null; // !log bug say object
  console.log(typeof css, "log css object but null => bug");

  let brian; //! let not possible with const
  console.log(typeof brian, "log brian undefined");

  const sym = Symbol();
  console.log(typeof sym, "log sym symbol");
console.groupEnd("primitive");

// # Reference Data Types Objects

console.group("Reference Object");
  //Array
  const mangas = ["Black Clover","Black Lagoon","Jojo Bizarre Adventure's"];
  console.log(typeof mangas, "log mangas array");

  //Object litteral
  const typesManga = {type:"Shonen", title:"Dragon Ball"};
  console.log(typeof typesManga, "log typesManga object");

  //Date
  const today = new Date();
  console.log(typeof today, "log date");
  //Function
  const Tyler = function test(){name};
  const Marla = () =>{age};
  console.log(typeof Tyler, "log function");
  console.log(typeof Marla, "log function es6");
console.groupEnd("Reference Object");

/////////////////////////////////////////////////////////////////////////

// #Type conversion
console.group("Type Conversion");
  let valeur;

//Number to String
  valeur =25;
  valeur = String(25);
  valeur = String(25+25); //works

// Boolean to String
  valeur = String(true);

// Date to String
  valeur = String(new Date());

//Array to String
  valeur = String([1,2,3,4]);


//toString()
  valeur = (25).toString();
  valeur = (true).toString();

//String to Number
  valeur = Number("5.456");
  valeur = Number(true); //1
  valeur = Number(false); //0
  valeur = Number(null); //0
  valeur = Number("Hello"); //Not a number
  valeur = Number([1,2,3]); //Not a number

  valeur = parseInt('700.77'); // without decimal
  valeur = parseFloat('700.77'); // with decimal
//Output
  console.log(valeur);
  console.log(typeof valeur);
 // console.log(valeur.length, "length from a number doesn t work need to String()");
  console.log(valeur.toFixed(2)); //arrondie

  const val1 = (5).toString(); //concatenation "5"+5 
  const val2 = 5;
  const sum = val1 + val2;
  console.log(sum, "somme val1 val2","10 attendu 5+5");
  console.log(typeof sum, "number if not to string");
console.groupEnd("Type Conversion");