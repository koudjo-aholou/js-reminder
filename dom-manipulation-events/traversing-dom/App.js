// # DOM MANIPULATION & EVENTS : Traversing the DOM
console.group("Traversing the DOM");
let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;
console.log(val);

// get Child nodes node list
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/*
1) Element
2) Attribute (deprecated)
3) Text node
8) Comment
9) Document itself
10) Doctype
*/

// get children element nodes; html collection

val = list.children;
val = list.children[0];
list.children[0].textContent = "Oh macarel"
console.log("list.children",val);

//children of children
list.children[3].children[0].id= 'test-link';

val = list.children[3].children[0];
console.log("list.children[3].children, children inside",val);
val = list.firstChild;
val = list.firstElementChild;
console.log("firstChild; firstElementChild",val);

val = list.lastChild;
console.log("lastChild; lastElementChild",val);
val = list.lastElementChild;
console.log("lastElementChild",val);

// Count child Element
val = list.childElementCount;
console.log("childElementCount",val);

// get parent Node
val = listItem.parentNode;
val = listItem.parentElement.parentElement;
console.log(val);

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(" 3em next sibling",val);

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(" precedent sibling",val);
console.groupEnd("Traversing the DOM");