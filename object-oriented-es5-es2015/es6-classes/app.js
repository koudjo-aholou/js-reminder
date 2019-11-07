//ES6 classes && Subclasses
console.group("ES6 classes")
  class Person{
    constructor(prenom,nom,da){
      this.prenom = prenom;
      this.nom = nom;
      this.anniv = new Date(da);
    }

    greeting(){
      return `Hello ${this.prenom} ${this.nom}`
    }

    goodbye(){
      return `Goodbye ${this.prenom}, Hope to see you soon`
    }

    calculateAge(){
      const diff = Date.now() - this.anniv.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() -1970)
    }
    getMarried(newName){
      this.nom = newName;
    }

    // if no this.name; this.prenom etc...
    static addNumbers(x,y){
      return x + y;
    }
  }
  const marla = new Person("Marla","Singer","09-27-1988");

  console.log(marla.greeting(),"avant marriage");
  marla.getMarried("Durden");

  console.log(marla.greeting());
  console.log(marla.calculateAge());

  console.log(Person.addNumbers(50,1))
console.groupEnd("ES6 classes");

console.group("ES6 subclasses");
  class Individu{
    constructor(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }

    bienvenue(){
      return `Bonjour ${this.firstname} ${this.lastname}`
    }
  }

  class Client extends Individu{
    constructor(firstname, lastname, phone, membership){
      super(firstname, lastname); //call parents class constructor
      this.phone = phone;
      this.membership = membership;
    }
    ehBeh(){
      return `${this.firstname} eh beh !!`
    }
    static getMembershipCost(){
      return 500;
    }
  }
  const john = new Client("John","Doe","555-555","Standard");
  console.log(john.ehBeh()," // eh beh method");
  console.log(john.bienvenue()," // bienvenue methode heritée de Individu");
  console.log(Client.getMembershipCost());

  console.groupEnd("ES6 subclasses");