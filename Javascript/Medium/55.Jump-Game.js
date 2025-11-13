/*
 * Link: https://leetcode.com/problems/jump-game/
 * Tags: Array, Dynamic Programming, Greedy
 * Constraints:
 *   1 <= nums.length <= 10^4
 *   0 <= nums[i] <= 10^5
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   - goal: índice do objetivo atual (inicia no último índice).
 *   Percorremos o array de trás para frente; se nums na posição atual atinge o goal,
 *   então atualizamos o goal para a posição atual.
 *   Ao final retornamos se goal === 0 (é possível alcançar o início).
 */

function canJump(nums) {
  let goal = nums.length - 1;
  for (let i = goal - 1; i >= 0; i--) {
    if (nums[i] >= goal - i) {
      goal = i;
    }
  }
  return goal === 0;
}

// Exemplos rápidos
/* Exemplo 1
let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));   // esperado: true
*/
/* Exemplo 2
let nums = [3,2,1,0,4];
console.log(canJump(nums));   // esperado: false
*/
