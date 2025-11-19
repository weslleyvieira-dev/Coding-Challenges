/*
 * Link: https://leetcode.com/problems/candy/
 * Tags: Array, Greedy
 * Constraints:
 *   n == ratings.length
 *   1 <= n <= 2 * 10^4
 *   0 <= ratings[i] <= 2 * 10^4
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(n)
 * Abordagem:
 *   Cada criança começa com 1 doce.
 *   Passada esquerda -> direita: se ratings[i] > ratings[i-1], dá candies[i-1] + 1.
 *   Passada direita -> esquerda: se ratings[i] > ratings[i+1], candies[i] recebe o maior valor entre ele mesmo e candies[i+1] + 1.
 *   Soma total ao final.
 * @param {number[]} ratings
 * @return {number}
 */

function candy(ratings) {
  let n = ratings.length;
  let candies = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((a, b) => a + b, 0);
}

// Exemplos rápidos
/* Exemplo 1
let ratings = [1, 0, 2];
console.log(candy(ratings)); // esperado: 5
*/
/* Exemplo 2
let ratings = [1, 2, 2];
console.log(candy(ratings)); // esperado: 4
*/
