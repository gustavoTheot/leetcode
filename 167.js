/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
Tempo: O(N)
Espaço: O(N)
Quando usar?: Quando o array está desordenado
*/
var twoSumRaiz = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left < right){
    const sum = numbers[left] + numbers[right]

    if(sum === target){
      // acrescenta + 1 ao indice, o que era 0 passa ser 1, e o que era 4 passa a ser 5
      return [left + 1, right + 1]
    }


    if (sum > target){
      right --
    }else {
      left ++
    }
  }
};

/*
Tempo: O(N)
Espaço: O(1)
Quando usar? Quando o array já está ordenado
*/
function twoSumUseHasing(numbers, target){
  const map = new Map();

  let i = 0

  for(i; i < numbers.length; i++){
    let actual = numbers[i]
    let required = target - actual
    
    if(map.has(required)){
      return [map.get(required), i+1]
    }

    map.set(actual, i+1)
  }
}

const respone = twoSum([2,7,11,15], 9)
console.log(respone)