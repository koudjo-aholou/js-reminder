//#Keyboard & Input Event
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
//form.addEventListener('submit',runEvent);

//Change Event
select.addEventListener('change',runEvent);
//Keydown
//taskInput.addEventListener('keydown',runEvent);

//KeyUp
//taskInput.addEventListener('keyup',runEvent);

//KeyPress
//taskInput.addEventListener('keypress',runEvent);

//Focus ( a l interieur de l input)
//taskInput.addEventListener('focus', runEvent);

//Blur ( a l exterieur de l input)
//taskInput.addEventListener('blur', runEvent);

//Cut (cmd+x)
//taskInput.addEventListener('cut', runEvent);

//Paste (cmd+v)
//taskInput.addEventListener('paste', runEvent);

//Copy (cmd+c)
//taskInput.addEventListener('copy', runEvent);

//Input (toutes action sur l input est détecté : copy, paste, cut)
//taskInput.addEventListener('input', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE ${e.type}`);
  console.log(e.target.value);
  //heading.innerText = e.target.value;
 // console.log(taskInput.value);
  //nettoyer l input
  //taskInput.value = '';

  //empeche le lien
  //e.preventDefault(); 
}
