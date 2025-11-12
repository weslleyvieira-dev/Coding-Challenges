/*
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Tags: Array, Dynamic Programming, Greedy
 * Constraints:
 *   1 <= prices.length <= 10^5
 *   0 <= prices[i] <= 10^4
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Percorre o array somando todas as diferenças positivas entre dias consecutivos (prices[i+1] - prices[i]).
 *   Isso equivale a comprar antes de cada subida e vender no pico, permitindo múltiplas transações.
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }

  return maxProfit;
}

// Exemplos rápidos
/* Exemplo 1
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));     // esperado: 7
*/
/* Exemplo 2
let prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));     // esperado: 4
*/
/* Exemplo 3
let prices = [7,6,4,3,1];
console.log(maxProfit(prices));     // esperado: 0
*/
/* Exemplo 4
let prices = [5, 7, 3, 9, 2, 1, 4];
console.log(maxProfit(prices));     // esperado: 11
*/
