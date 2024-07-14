function sumOfEvenNumbers(arr)
{

    const evenNumbers=arr.filter((num)=>{
        if(num%2==0)
        {
            return num
        }
    })

    const sum=evenNumbers.reduce((accumulator,currentNum)=>
        {
            return accumulator+=currentNum
        },0)

    return sum
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
let sum = sumOfEvenNumbers(array);
console.log("Sum of even numbers : ", sum);