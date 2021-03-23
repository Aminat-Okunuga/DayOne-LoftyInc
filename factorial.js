// Program to calculate the factorial of a number
let num = 5;

let factorial = 1;
for(let count = num; count >= 1; count--){
   factorial = factorial * count;
}
// return factorial;
console.log("The factorial of 10 is: " + `${factorial}`);

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);