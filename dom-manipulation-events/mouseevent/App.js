//#Mouse Event
const clearBtt = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

 //Click
// clearBtt.addEventListener("click",runEvent)

 //Click
// clearBtt.addEventListener("dblclick",runEvent)

 //MouseDown
// clearBtt.addEventListener("mousedown",runEvent)

//MouseUp
//clearBtt.addEventListener("mouseup",runEvent)

//MouseEnter
//card.addEventListener("mouseenter",runEvent)

//MouseLeave
//card.addEventListener("mouseleave",runEvent)

//MouseOver /MouseOut => se déclenche si la souris survole un autre element
//card.addEventListener("mouseover",runEvent)

//MouseOut
//card.addEventListener("mouseout",runEvent)

//MouseMove
card.addEventListener("mousemove",runEvent)
//Event Handler
function runEvent(e){
console.log(`Event Type ${e.type}`);
heading.textContent = `Mouse X : ${e.offsetX}  Mouse Y = ${e.offsetY}`;
document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}