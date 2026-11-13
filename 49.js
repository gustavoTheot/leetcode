/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
  1. percore o array
  2. separa as letras (split), organiza (sort) e junta (join)
  3. agrupa objetos com a mesma letra dentro de um array
*/

function groupAnagrams(strs){
  const map = new Map();

  for(let str of strs){
    
    // separa + organiza + junta
    const key = str.split('').sort().join('')

    // se não tiver no mapa, adicona
    if(!map.has(key)){
      map.set(key, [])
    }

    // se tiver, pega e jogar no grupo
    map.get(key).push(str)
  }

  // retorna em formato de array
  return Array.from(map.values())
}

const response = groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(response)





