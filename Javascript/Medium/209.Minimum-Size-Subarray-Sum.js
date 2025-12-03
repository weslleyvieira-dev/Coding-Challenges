/*
 * Link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * Tags: Array, Binary Search, Sliding Window, Prefix Sum
 * Constraints:
 *   1 <= target <= 10^9
 *   1 <= nums.length <= 10^5
 *   1 <= nums[i] <= 10^4
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Sliding window com dois ponteiros (left e right).
 *   O ponteiro right avança somando o elemento à soma da janela.
 *   Quando a soma da janela >= target, tenta encolher pela esquerda:
 *     move left para frente e subtrai o elemento removido, atualizando o menor tamanho.
 *   Ao final, retorna o menor tamanho encontrado ou 0 se nenhuma janela atingir o target.
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  if (minLength === Infinity) {
    return 0;
  } else return minLength;
}

// Exemplos rápidos
/* Exemplo 1
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums)); // esperado: 2
*/
/* Exemplo 2
let target = 4;
let nums = [1,4,4];
console.log(minSubArrayLen(target, nums)); // esperado: 1
*/
/* Exemplo 3
let target = 11;
let nums = [1,1,1,1,1,1,1,1];
console.log(minSubArrayLen(target, nums)); // esperado: 0
*/
