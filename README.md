# js-reminder
<ol>
  <li>Console Folder + let var const : </li>
  <ul>
    <li>console.log(); <br/></li>
    <li>console.warn(); (Warning text in Yellow) <br/></li>
    <li>console.error(); (Error text in red) <br/></li>
    <li>console.group(); (group the list of console log) <br/></li>
    <li>console.groupEnd(); (end the list of console log) <br/></li>
    <li>console.table(); (create an array easier to read the information) <br/></li>
    <li>assign properties to const with Object assign</li>
  </ul>
  <li>Data Types & Type Conversion</li>
    <ul>
      <li>6 Primitives Data Types  <br/></li>
      <li>Reference Data Types Objects <br/></li>
      <li>Types conversion <br/></li>
    </ul>
  <li>Number & Math Object & Strings</li>
    <ul>
      <li>Math Object : Math.sqrt,Math.pow ...<br/></li>
      <li>Strings : Append, Escaping, chartAt, substring() ...<br/></li>
    </ul>
  <li>Template literal</li>
    <ul>
      <li> `${template}`<br/></li>
    </ul>
   <li>Arrays and Object Literals</li>
    <ul>
      <li>Array.isArray()<br/></li>
      <li>unshit, shift, pop, splice, reverse, sort, find...<br/></li>
      <li>person['nom']; //like person.nom<br/></li>
      <li>function inside object<br/></li>
    </ul>
    <li>Dates & Times</li>
    <ul>
      <li>New Date & setDate & getDate...<br/></li>
    </ul>
    <li>If statement & Comparison Operators</li>
    <ul>
      <li> == <br/></li>
      <li> != <br/></li>
      <li> === (type and value) <br/></li>
      <li>>= <= <br/></li>
      <li>&& (& binary)<br/></li>
      <li>||  (| binary)<br/></li>
      <li> SWITCH : pratique si bcp de else if <br/></li>
        <ul>
          <li>switch(new Date().getDay()){</li>
          <li>case 0 : jourA = "Dimanche";</li>
          <li> break;</li>
          <li>case 1 : jourA = "Lundi etc...";</li>
          <li> break;</li>
        </ul>
      </ul>
      <li>Function declarations & function expressions</li>
        <ul>
          <li>Declaration function toto(){}</li>
          <li>Expression const toto = function(){}</li>
          <li>Function IIFE s (function...)</li>
        </ul>
      <li>General Loop</li>
        <ul>
          <li>For</li>
          <li>While</li>
          <li>Do While</li>
          <li>For Each</li>
          <li>Map</li>
          <li>For In</li>
          <li>Add Properties in Array Object with Map</li>
        </ul>
      <li>Window Object</li>
        <ul>
          <li>Window.console.log() || console.log()</li>
          <li>Window.alert() || alert()</li>
          <li>prompt() (input)</li>
          <li>confirm</li>
          <li> Size of the screen : window.outerWidth : window.outerhHight</li>
          <li>Scroll point : window.scrollX ; window.scrollY</li>
          <li>Location : window.location.search</li>
          <li>Navigator : window.navigator.language</li>
          <li>Redirect : window.location.href = "https://www.google.fr";</li>
          <li>Reload : window.location.reload()</li>
          <li>History object : window.history.length / go / back / forward</li>
        </ul>
         <li>Scope</li>
         <ul>
          <li>Global Scope / Function Scope / If/For Scope</li>
          <li>var / let / const effect</li>
         </ul>
         <li>DOM Manipulation & Events</li>
          <ul>
           <li> Examining the Document Object Model : </li>
            <ul>
              <li>Tree of nodes elements</li>
              <li>Js can read / write / manipulate the DOM</li>
              <li>Object Oriented Representation</li>
              <li>document.all</li>
              <li>document.title; document.body; document.domain....</li>
              <li>document.scripts[1].getAttribute('src');</li>
              <li>Array.from(scripts);</li>
            </ul>
            <li>DOM Selectors For Single Elements</li>
               <ul>
                <li>document.getElementBydId()</li>
                <li>document.querySelector()</li>
                <li>document.querySelector('li:nth-child(3)')</li>
              </ul>
            <li>DOM Selectors For Multiple Elements</li>
               <ul>
                <li>document.getElementsByClassName();</li>
                <li>document.querySelector('ul').getElementsByClassName('collection-item');</li>
                <li>document.getElementsByTagName('li');</li>
                <li>document.querySelectorAll()</li>
              </ul>
            <li>Traversing The DOM</li>
              <ul>
                <li>document.querySelector('ul.collection').childNodes</li>
                <li>document.querySelector('ul.collection').children</li>
                <li>document.querySelector('ul.collection').firstChild /lastChild</li>
                <li>document.querySelector('ul.collection').parentNodes</li>
                <li>document.querySelector('ul.collection').parentElement</li>
                <li>nextSibling / previousSibling</li>
                <li>xxXXXXX.nextElementSibling.nextElementSibling.previousElementSibling;</li>
              </ul>
            <li>Create element</li>
              <ul>
                <li>document.createElement('li')</li> 
                <li>document.createElement('li').className</li> 
                <li>document.createElement('li').id</li> 
                <li>li.appendChild(document.createTextNode("Hello World"))</li>
                <li>document.querySelector('ul.collection').appendChild(li)</li>
              </ul>
              <li>Replace</li>
                <ul>
                  <li>get the oldHeading && create the newHeading</li>
                  <li>get the parent = cardAction</li>
                  <li>cardAction.replaceChild(newHeading, oldHeading);</li>
                </ul>
              <li>Remove Classes</li>
                <ul>
                  <li>.classList.add('test')</li>
                   <li>.classList.remove('test')</li>
                </ul>
              <li>Remove Attributes</li>
                <ul>
                  <li>.getAttribute('href');</li>
                   <li>.setAttribute("href", "https://www.snapchat.com");</li>
                   <li>.setAttribute("title", "J'ai maintenant un Titre!")</li>
                   <li>.hasAttribute("title");</li>
                   <li>.removeAttribute("href");</li>
                </ul>
                <li>Event listeners</li>
                <ul>
                  <li>...</li>
                  <li>...</li>
                  <li>...</li>
                </ul>
          </ul>
    </ul>
</ol>
