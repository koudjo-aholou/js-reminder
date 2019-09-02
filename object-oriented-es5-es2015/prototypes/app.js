//Object.Prototype

//Person prototype
console.group("Object.Prototype");
  function Person(firstname,lastname,dob, city){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
    this.city = city;

    //method function inside an object
    // this.calculateAge = function(){
    //   const diff = Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
  }
  //Function inside prototype not inside the constructor

  // Gets Married
  Person.prototype.getsMarried = function(newLastName){
    this.lastname = newLastName;
  };

  //Calcul Age
  Person.prototype.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

  //Get fullName
  Person.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
  };

  const tyler = new Person("Tyler","Durden","8-6-1986");
  const marla = new Person("Marla","Singer","12-12-1988");
  console.log(marla)
  console.log(tyler.calculateAge(), "==> get age");
  console.log(marla.getFullName(), "==> get full name");

  marla.getsMarried("Durden");

  console.log(marla.getFullName(), "==> new lastname");

  console.log(marla.hasOwnProperty("firstname"));
  console.log(marla.hasOwnProperty("hobbies"));
console.groupEnd("Object.Prototype");
/////////////////////////////////////////////////////////
console.group("prototype inheritance")

  //Personne constructor
  function Personne(prenom,nom,age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age
  };

  Personne.prototype.bienvenue = function(){
    return `Bonjour ${this.prenom} ${this.nom}`;
  }

  const guts = new Personne('Guts','Berserk');
  console.log(guts.bienvenue());

  //Client constructor
  function Client(prenom,nom,numero,membre){
    Personne.call(this,prenom,nom);
    this.numero = numero;
    this.membre = membre;
  }
  //console.log(Client.prototype,'l');

  //Heritage prototype bienvenue methode
  Client.prototype = Object.create(Personne.prototype)
  //console.log(Client.prototype,'lo');

  //Client prototype
  Client.prototype.constructor = Client;

  //client bienvenue
  Client.prototype.deconnexion = function(){
    return `${this.prenom}, vous nous quittez déjà...  à bientot ! `;
  }
  //Creation client

  const client1 = new Client("Casca","Griff","08-35-65-65-65","lieutenant");
  console.log(client1);
  console.log(client1.bienvenue()," ou ", client1.deconnexion());

console.groupEnd("prototype inheritance");