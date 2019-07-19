// # DOM MANIPULATION & EVENTS : create remove replace elements
console.group("create element");

  // Create element
    const li = document.createElement('li');

  // Add a class
    li.className ="collection-item";

  // Add a id
    li.id ="new-item";

  // Add attribute
    li.setAttribute('title', 'New Item');

  // Create textNode
    li.appendChild(document.createTextNode("Hello World"));

  //Create new Link element
    const link = document.createElement('a');

  //Add a class
    link.className = "delete-item secondary-content";

  //Add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append link into li
    li.appendChild(link);

  //Append li as child to ul
    document.querySelector('ul.collection').appendChild(li);
  console.log(li);

console.groupEnd("create element");
///////////////////////////////////////////////
console.group("replace element");
//Replace element

  //Create element
  const newHeading = document.createElement('h2');
  
  //Add id
  newHeading.id = "task-title";
  
  //New textNode
  newHeading.appendChild(document.createTextNode('Enjoy Task List'));

  //Get the old Heading
    const oldHeading = document.getElementById('task-title');
  
    //Parent
      const cardAction = document.querySelector('.card-action');
    //Replace
      cardAction.replaceChild(newHeading, oldHeading);
  console.log(newHeading);

console.groupEnd("replace element");
///////////////////////////////////////////////
console.group("remove element");
  //Remove element
    const lis = document.querySelectorAll('li');
    console.log(lis.length);
    const list = document.querySelector('ul');
  
    //Remove listItem
      lis[0].remove();
      console.log("remove ne change pas length",lis.length);
     
      //Remove child
        list.removeChild(lis[3])

      // Remove/add Classes && Attributes
        const firstLi = document.querySelector('li:first-child');
        const link2 = firstLi.children[0];
        let val;
        val = link2.className;
        val = link2.classList;
        val = link2.classList[0];
        link.classList.add('test')
        link.classList.remove('test')
        val = link;
        console.log(val);

      //  Attributes
        val = link2.getAttribute('href');
        val = link2.setAttribute("href", "https://www.snapchat.com");
        val = link2.setAttribute("title", "J'ai maintenant un Titre!");
        val = link2.hasAttribute("title");
        val = link2.removeAttribute("href");
        console.log(val);
console.groupEnd("remove element");
