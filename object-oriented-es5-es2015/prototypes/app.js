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