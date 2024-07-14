function checkPalindrome(string)
{
string=string.toLowerCase()     //convert into lowercase characters
string=string.replace(/[^0-9a-z]/g,'')   //to remove all characters other than 0-9 and a-z
let endingIndex=string.length-1
let startingIndex=0;
let isPalindrome=true

while(startingIndex<endingIndex)
{
    if(string[startingIndex]!=string[endingIndex])
    {
        isPalindrome=false;
        break;
    }
    startingIndex++
    endingIndex--
}

return isPalindrome
}

let string="radar"
//let string='A man, a plan, a canal, Panama!'
if(checkPalindrome(string))
{
    console.log(string,' is a palindrome')
}
else
{
    console.log(string,' is not a palindrome')
}
