
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var list = []

  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
      for(let k = j+1; k < nums.length; k++){
        let sum = nums[i] + nums[j] + nums[k]
        if(sum === 0){
          if(i !== j){
            if(i !== k){
              if(j !== k){
                const result = [nums[i], nums[j], nums[k]]
                list.push(result)
              }
            }
          }

        }
      }
    }
  }
  return list
};

// 3Sums
function threSumTheBest(nums){
  let array = nums.sort((a, b) => a-b)
  const result = []

  for(let i = 0; i < array.length; i++){
    if(i > 0 && array[i] === array[i-1]) continue

    let left = i+1
    let rigth = array.length - 1
    let complement = array[i]

    while(left < rigth){
      const total = complement + array[left] + array[rigth]

      if(total === 0){
        const values = [complement, array[left], array[rigth]]

        result.push(values)

        left++;
        rigth--;

        while(array[left] === array[left-1]){
          left++
        }
      }

      else if(total > 0){
        rigth--
      }else{
        left++
      }
    }
  }

  return result
}


var nums = [1,2,0,1,0,0,0,0]
const result = threSumTheBest(nums)
console.log(result)