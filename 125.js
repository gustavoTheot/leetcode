/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromePaia = function(s) {   
  const cleanStr = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "")

  const reversedStr = cleanStr.split("").reverse().join("")

  return cleanStr === reversedStr
};


function isPalindromeSenior(s){
  const cleanStr = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "")

  let left = 0
  let right = cleanStr.length - 1

  // É como se fosse pegando cada ponta e fosse aproximando-as
  while(left < right){

    if(cleanStr[left] !== cleanStr[right]){
      return false;
    }

    // aumenta a ponta direta
    left++
    // reduz a ponta esquerda
    right--
  }

  return true
}

function hardCore(){
  const cleanStr = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "")

  let left = 0, right = cleanStr.length - 1

  while(left < right){
    if(cleanStr[left++] !== cleanStr[right--]){
      return false;
    }
  }
  return true
}


/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
const response = isPalindromeSenior("A man, a plan, a canal: Panama")
console.log(response)