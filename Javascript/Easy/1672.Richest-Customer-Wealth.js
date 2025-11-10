/*
 * Link: https://leetcode.com/problems/richest-customer-wealth/
 * Tags: Array, Matrix
 * Constraints:
 *   m == accounts.length
 *   n == accounts[i].length
 *   1 <= m, n <= 50
 *   1 <= accounts[i][j] <= 100
 * Complexidade:
 *   Tempo: O(m * n)
 *   Espaço: O(1)
 * Abordagem:
 *   Para cada cliente (linha), somamos suas contas (colunas) e
 *   mantemos o maior total encontrado.
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += accounts[i][j];
    }
    if (customerWealth > maxWealth) {
      maxWealth = customerWealth;
    }
  }

  return maxWealth;
};

// Exemplos rápidos
// console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));            // esperado: 6
// console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));          // esperado: 10
// console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])); // esperado: 17
