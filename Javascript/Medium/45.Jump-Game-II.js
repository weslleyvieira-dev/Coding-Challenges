/*
 * Link: https://leetcode.com/problems/jump-game-ii/
 * Tags: Array, Dynamic Programming, Greedy
 * Constraints:
 *   1 <= nums.length <= 10^4
 *   0 <= nums[i] <= 10000
 *   It's guaranteed that you can reach nums[n - 1].
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Percorremos o array do início mantendo três variáveis:
 *   count (conta pulos), end (alcance do salto atual) e limit (maior alcance possível dentro do salto atual).
 *   Para cada índice i atualizamos limit recebe o maior valor entre limit e i + nums[i].
 *   Quando i === end precisamos dar um novo pulo: incrementamos count e atualizamos end = limit.
 *   Como é garantido que o último índice é alcançável, esse processo produz o número mínimo de pulos.
 */

function jump(nums) {
  let count = 0,
    end = 0,
    limit = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    limit = Math.max(limit, i + nums[i]);
    if (i === end) {
      count++;
      end = limit;
    }
  }

  return count;
}

// Exemplos rápidos
/* Exemplo 1
let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));      // esperado: 2
*/
/* Exemplo 2
let nums = [2,3,0,1,4];
console.log(jump(nums));      // esperado: 2
*/
