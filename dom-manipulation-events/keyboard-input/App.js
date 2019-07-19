//#Keyboard & Input Event
const from = document.querySelector('form');
const taskInput = document.getElementBydId('task');

formData.addEventListener('submit',runEvent);

function runEvent(e){
  console.log(`EVENT TYPE ${e.type}`);
}