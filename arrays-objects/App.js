// #Arrays & array method
console.group("Array");
  const array = [1,2,3,4,5];
  const array2 = new Array(22,45,33,5);

  console.log(array, "[]");
  console.log(array2, "with new Array()");

  let val;

  //check if array
  val = Array.isArray(array);

  //insert Array
  array[0] = 699;

  //Mutating array
  //add front
  array2.unshift(777);
  //add end
  array2.push(999);
  //take of from end
  array2.pop(); //remove 999

  //Take of from front
  array2.shift(); //remove 777

  //Splice values
  array2.splice(1,1); //45

  //reverse
  array2.reverse();
  console.log(array2, "mutating");
  //concatenate
  val = array2.concat(array)

  //Sorting array
  val = array2.sort();
  //compare function plus petit au plus grand
  val = array2.sort(
    function(x,y){
      return x-y;
    }
    );
    console.log(val);
  //+ grand ay plus petit
    val = array2.sort(
      function(x,y){
        return y-x
      }
      );

    function over30(array2){
      return array2 >30;
    }
  val = array2.find(over30);

  console.log(val);
  console.log(array, "[]");
console.groupEnd("Array");

// # Object Literal
