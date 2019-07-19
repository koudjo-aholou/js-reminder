//# Local & Session Storage

//Set local storage item
//localStorage.setItem('name','Tyler');
//localStorage.setItem('age','unknown');
//Set session storage item (disparait à la fermeture du navigateur)
//sessionStorage.setItem('name','Rupert');

//Remove from storage
//localStorage.removeItem('name');

//Get from Storage
//const name = localStorage.getItem('name');
//const age = localStorage.getItem('age');

//Clear localStorage 
//localStorage.clear();
//console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  let tasks;
  if(localStorage.getItem('tasks')=== null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  //console.log(123, task);
  //JSON.stringify() transforme l objet/tableau en string
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
  e.preventDefault();
});
//JSON.parse() transforme la string en objet/tableau
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task)
});
