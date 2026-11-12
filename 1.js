/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Estrutura ainda mantem a complexidade O(N²)
function twoSum(nums, target) {
  // primeiro ponteiro
  for (let i = 0; i < nums.length; i++){

    // segundo ponteiro
    for (let j = i+1; j < nums.length; j++){

      let sum = nums[i] + nums[j]
      if(sum === target){
        return [i, j]
      }
    }
  }
};



function usingTableHash(nums, target){
  const map = new Map();

  for(let i = 0; i < nums.length; i++){
    const numAtual = nums[i]
    const complemento = target - numAtual // ex: targe: 9, nums: [2,7,11,15] => 9 - nums[i] que seria começaria pelo index 0, [0] = 2. 9 - 2 =  7, logo se tiver um 7 ele utiliza e encontra

    // Verifica se o complemento preciso está no mapa
    if(map.has(complemento)){
      return [map.get(complemento), i]
    }

    // salva o número atual e seu indice para futura busca
    map.set(numAtual, i)
  }
}

const response = usingTableHash([2,7,11,15], 9)
console.log(response)