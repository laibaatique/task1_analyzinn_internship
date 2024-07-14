const objects = [
    { Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
    { Fname: 'Ali', Lname : 'Raza', value: 15 },
    { Fname: 'Ahmad', Lname : 'Raza', value: 15 },
    { Fname: 'Ayan', Lname : 'Raza', value: 15 },
    { Fname: 'Usman', Lname : 'Umer', value: 5 }
    ];

if(objects.length==0)
{
    console.log("Array is empty")
}   
else
{
 

    findObjects=(accumulator,currentObject)=>
    {
        if(accumulator.length==0||currentObject.value>accumulator[0].value)
        {
            return [currentObject]
        }
        else if(accumulator[0].value==currentObject.value)
        {
            accumulator.push(currentObject)
        }

        return accumulator

    }

   const highestValuedObjects=objects.reduce(findObjects,[])

   console.log("Object/Objects with highest value : ",highestValuedObjects)

}
