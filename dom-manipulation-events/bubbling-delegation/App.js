//# Event Bubbling && Delegation
  //# Event Bubbling
      // document.querySelector('.card-title').addEventListener('click',onClick);

      // function onClick(){
      //   console.log("card Title");
      // }

      // document.querySelector('.card-content').addEventListener('click',function(){
      //   console.log("card Content");
      // });

      // document.querySelector('.card').addEventListener('click',function(){
      //   console.log("card");
      // });

      // document.querySelector('.col').addEventListener('click',function(){
      //   console.log("col Content");
      // });
  //# Event Delegation

  // const deleteItem = document.querySelector('.delete-item');

  // deleteItem.addEventListener('click', delItem);

    document.body.addEventListener('click', delItem);
  function delItem(e){

    //console.log(e.target);
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //   console.log("click delete item",'mais pb si ajout de class car diff de la condition);
    // }
    //Best practice avec classList.contains
    if(e.target.parentElement.classList.contains('delete-item')){
      console.log("click delete item");
      e.target.parentElement.parentElement.remove();
    }
  }
