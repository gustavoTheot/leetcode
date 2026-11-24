/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0]
  let sale = prices+1

  let buyIndex;
  let saleIndex;

  // pegar menor preço de compra
  for(let i = 1; i < prices.length; i++){
    if (prices[i] < buy){
      buyIndex = i
      buy = prices[i]
    }
  }

  // pegar o maior valor de venda após o dia da compra
  for(let j = buyIndex+1; j < prices.length; j++){
    console.log(`index: ${j} ${prices[j]}`)  
    
    if(prices[j] > prices[j+1]){
      saleIndex = j+1
      sale = prices[j]
    }
  }

  return {
    buyIndex: buyIndex, 
    buy, 
    saleIndex: saleIndex,
    sale
  }
};

const prices = [7, 1, 5, 3, 6, 4];
const response = maxProfit(prices)
console.log(response)