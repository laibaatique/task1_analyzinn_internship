function reverseString(str)
{

    //you can also use .reverse()
let endingIndex=str.length-1
let startingIndex=0;

while(startingIndex<endingIndex)
{
    let temp=str[endingIndex]
    str[endingIndex]=str[startingIndex]
    str[startingIndex]=temp
    startingIndex++
    endingIndex--
}


return str.join("")
}

let string="I am Laiba Atique"
let tempArr=[...string]
string=reverseString(tempArr)
console.log(string)
