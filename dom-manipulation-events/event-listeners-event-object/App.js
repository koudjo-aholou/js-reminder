//#Event listener Object
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('hello');
//  // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log("Click!",e);
  let val;
  val = e;

  // Event target
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  val = e.target.innerText = 'Done!';

  //Event type
  val = e.type;

  //TimeStamp
  val= e.timeStamp;
  //timeStamp en seconde
    //val = Math.floor(val/1000); 

  //Coord event relative to the window
    val = e.clientY;
    val = e.clientX;
  
  //Coord event relative to the window
  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}