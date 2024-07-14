const checkEvenOrOdd=(num)=>
{
    if(num%2==0)
    {
        return true
    }
    else
    {
        return false
    }
}

let num=31
if(checkEvenOrOdd(num))
{
    console.log(num," is an even number")
}
else
{
    console.log(num," is a odd number")
}