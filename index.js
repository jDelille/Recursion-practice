// count down function
function countDown(n) {
  for (let i = n; i > 0; i++) {
    console.log(i);
  }
  console.log("Done");
}

// recursive count down function
function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Done");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}

// What is the countDownRecursive function doing?
// To avoid the function being called until it reaches maximum calls, we will write countDownRecursive(n-1) to subtract 1 from  the number each time.
// Call the function and choose a number for the parameter ==> countDownRecursive(3)
// The countDownRecursive function then checks if 3 is less than or equal to 0 (n <= 0), and if it is not, it will continue to run the fuction until it gets to 0. Once at 0 it will console.log("Done").

function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i++) {
    total += 1;
  }
  return total;
}

function sumRangeRecursive(n, total = 0) {
 if (n <= 0) {
  return total;
 }
 return sumRangeRecursive(n - 1, total + n) ;
}

// What is the sumRangeRecursive function doing?
// sumRangeRecursive(3) will return sumRangeRecursive(3, 0) because total defaults to 0;
// Since 3 is not equal to 0, it will run the function again and look like sumRangeRecursive(2, 3) because n will subtract by 1 and total will add 3. 
// Then it will run the function again and it will look like sumRangeRecursive(1, 5) because total (3) adds 2 to become 5.
// Finally when the function is sumRangeRecursive(0, 6) it will return 6 because n is less than or eqaul to 0.
// Answer: 6


function printChildren(t) {

}

function printChildrenRecursive(t) {
 if (t.children.length === 0) {
  return;
 }
 t.children.forEach(child => {
  console.log(child.name)
  printChildrenRecursive(child)
 })
}

const tree = {
 name: 'John',
 children: [
  {
   name: 'Jim',
   children: []
  },
  {
   name: 'George',
   children: [
    {name: 'Kyle', children: []},
    {name: 'Justin', children: []}
   ]
  }
 ]
}

// the name of the children in the tree will be logged to the console.
// using recursion for these types of problems is the best way to go about doing this because it will log the children names despite how nested they are. this would be hard to loop over iteratively. because they could be nested 2 levels deep or 100 levels deep.

// printChildrenRecursive(tree)

