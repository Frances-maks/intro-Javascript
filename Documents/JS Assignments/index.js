// Assignment 1
// function showPrime(limit){
// for (let i = 1; i <= limit; i++) {
// let flag = 0;

// for (let j = 2; j < i; j++) {
//     if (i % j == 0){
//         flag = 1;
//         break;
//     }
// }

// if (flag == 0) {
//     console.log(i);
// }
// }
// }
// console.log(showPrime(20));

// Assignment 2
// const array = [
//     {name: "Elle", isInstructor:true},
//     {name: "Tim", isInstructor:true},
//     {name: "Matt", isInstructor:true}
// ];

// function extractKey(array, key) {
//     return array.reduce((acc, obj) => {
//         return acc.concat(obj[key])
//       }, [])
//     }
    
//     console.log(extractKey(array, 'name'))

// Assignment 3
// filterLetters(["a","a","b","c","A"], "B")

// function filterLetters(arr,letter){
//   let count = 0
//   arr.filter(x => {
//      if(x.toLowerCase() == letter.toLowerCase()){
//     count++
//   }
// })
// console.log(count);
// }

// Assignment 4
printFirstAndLast(['awesome','example','of','forEach']); 

function printFirstAndLast (arr) {
  
    let newString = '';
    
    arr.forEach ( function (val) {
      let newVal = val[val.length-1];
      newString = val[0] + newVal;
      console.log(newString);
    });
  }
  