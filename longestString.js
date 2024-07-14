let fruits = ['apple', 'banana', 'cherry', 'date','lychee'];


if(fruits.length==0)
{
    console.log("Empty array")
}
else
{


findStrings=(accumulator,currentString)=>
    {
        if(accumulator.length==0||currentString.length>accumulator[0].length)
        {
            return [currentString]
        }
        else if(accumulator[0].length==currentString.length)
        {
            accumulator.push(currentString)
        }

        return accumulator

    }

   const longestStrings=fruits.reduce(findStrings,[])

console.log("String/Strings with longest length : ",longestStrings)
}
