/*
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Tags: Array, Dynamic Programming
 * Constraints:
 *   1 <= prices.length <= 10^5
 *   0 <= prices[i] <= 10^4
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Dois ponteiros: buy aponta para o índice do menor preço encontrado até o momento e sell percorre os dias seguintes.
 *   Para cada posição de sell, se prices[sell] > prices[buy] calcula-se profit e atualiza-se maxProfit quando apropriado.
 *   Se prices[sell] <= prices[buy], atualiza-se buy = sell (novo menor preço).
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    } else {
      buy = sell;
    }

    sell++;
  }

  return maxProfit;
}

// Exemplos rápidos
/* Exemplo 1
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));     // esperado: 5
*/
/* Exemplo 2
let prices = [7,6,4,3,1];
console.log(maxProfit(prices));     // esperado: 0
*/
/* Exemplo 3
let prices = [5, 7, 3, 9, 2, 1, 4];
console.log(maxProfit(prices));     // esperado: 6
*/
