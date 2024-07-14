function findFactorial(num)
{
    const numbers = Array.from({ length: num }, (value, index) => index + 1);
    let factorial=numbers.reduce((accumulator,currentValue)=>{
      return accumulator*=currentValue
    },1)

    return factorial
}

let num=10
console.log("Factorial of ",num," is ",findFactorial(num))