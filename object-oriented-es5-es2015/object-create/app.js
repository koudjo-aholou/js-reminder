//Person prototype

const personPrototypes = {
  greeting : function(){
   return `Hello ${this.pseudo}, welcome to ${this.nameClub}`
  },
  getNewPseudo : function(newPseudo){
    this.pseudo = newPseudo
  }
};

const rupert = Object.create(personPrototypes);
rupert.pseudo = "Cornelius";
rupert.nameClub = "The Fight Club";
rupert.city = "Wichita";
console.log(rupert.getNewPseudo("Rupert"))

console.log(rupert.greeting());

const robert = Object.create(personPrototypes,{
  pseudo:{value : 'No name'},
  city:{value: 'Los Angeles'},
  nameClub:{value : 'The Fight Club'},
  name:{value : 'His name was Robert Paulson'}
});

console.log(robert.greeting());