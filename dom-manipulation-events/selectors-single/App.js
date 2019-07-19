// # DOM MANIPULATION & EVENTS : SINGLE ELEMENT SELECTOR
console.group("Selectors for Single ELements");
  console.group("getElementBydId()");
  //! document.getElementBydId()
  const TaskTitle = document.getElementById('task-title');
  let val;

  //get things from the element
  val = document.getElementById('task-title').id;
  val = document.getElementById('task-title').className;
  console.log(val);

  //change styling
  val = document.getElementById('task-title').style;
  console.log(val);

  TaskTitle.style.backgroundColor = "#333";
  TaskTitle.style.color = "#fff";
  TaskTitle.style.padding = "10px";
  //TaskTitle.style.display = "none";
  console.log(val);

  //change content
  TaskTitle.textContent = "Youpi";
  TaskTitle.innerText = "PiYou";

  //insert HTML
  TaskTitle.innerHTML = '<span style="color:red">Task List</span>';
  console.groupEnd("getElementBydId()");
  console.group("document.querySelector()");

  //!document.querySelector
  console.log("id",document.querySelector('#task-title'));
  console.log("class",document.querySelector('.card-title'));
  console.log("h5",document.querySelector('h5'));

  //first one
  document.querySelector('li').style.color = "blue";
  document.querySelector(' ul li').style.color = "red";

  //CSS sudosclass
  document.querySelector('li:last-child').style.color = "blue";
  document.querySelector('li:first-child').style.color = "purple";
  document.querySelector('li:nth-child(3)').style.color = "yellow";
  document.querySelector('li:nth-child(4)').textContent = "Amour Gloire et Beauté";
  document.querySelector('li:nth-child(odd)').style.background= "#ccc"; //impair
  document.querySelector('li:nth-child(even)').style.background= "#f4f4f4"; //pair
  console.groupEnd("document.querySelector()");
console.groupEnd("Selectors for Single ELements");