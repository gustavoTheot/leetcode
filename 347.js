/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function createHash(nums) {
  const map = new Map();

  // percorrer o array
  for (let i = 0; i < nums.length; i++){
    const actualNumber = nums[i]
    // verifica se o valor possui hash
    if (map.has(actualNumber)){
      // Se o número já existe, pega a contagem atual dele e soma 1
      const countOld = map.get(actualNumber)
      map.set(actualNumber, countOld + 1)
    }else {
      // se não tiver, crie um hash para o indice
      map.set(actualNumber, 1)
    }
  }

  return map
}

function topKFrequent(nums, k) {
  const numsHash = createHash(nums)

  const pars = Array.from(numsHash.entries())

  pars.sort((a, b) => b[1] - a[1])

  const result = []

  // percorre os valores hashados em quantas vezes apareceram
  for(let i = 0; i < k; i++){
    // insere o indice do array e o valor do indice que está dentro do array selecionado
    result.push(pars[i][0])
  }

  return result
};

const response = topKFrequent([2,2,3,1,1,1,4,4,4,4,4], 2)
console.log(response)