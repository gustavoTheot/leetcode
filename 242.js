/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function createHash(str){
  const hashMap = new Map();

  // setta hash para cada letra
  for (const letter of str){
    hashMap.set(letter, (hashMap.get(letter) || 0) + 1)
  }

  return hashMap
}

function isAnagram(s, t) {
  var sLowerCase = s.toLowerCase().split('');
  var tLowerCase = t.toLowerCase().split('');

  if(sLowerCase.length !== tLowerCase.length) return false

  const hash1 = createHash(sLowerCase)
  const hash2 = createHash(tLowerCase)

  if(hash1.size !== hash2.size) return false

  // realiza comparação dos hash
  for (let [letter, quantity] of hash1){
    if (hash2.get(letter) !== quantity){
      return false;
    }
  }

  return true
};


console.log(isAnagram("anagram", "nagaram"));
