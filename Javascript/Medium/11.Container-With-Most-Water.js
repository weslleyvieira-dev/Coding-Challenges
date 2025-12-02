/*
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Tags: Array, Two Pointers, Greedy
 * Constraints:
 *   n == height.length
 *   2 <= n <= 10^5
 *   0 <= height[i] <= 10^4
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Mover o ponteiro com menor altura, calculando a área entre left e right.
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let maxAmount = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const distance = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const amount = minHeight * distance;

    if (amount > maxAmount) maxAmount = amount;

    height[left] > height[right] ? right-- : left++;
  }

  return maxAmount;
}

// Exemplos rápidos
/* Exemplo 1
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // esperado: 49
*/
/* Exemplo 2
const height = [1, 1];
console.log(maxArea(height)); // esperado: 1
*/
/* Exemplo 3
const height = [8, 7, 2, 1];
console.log(maxArea(height)); // esperado: 7
*/
