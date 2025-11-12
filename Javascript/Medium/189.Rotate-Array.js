/*
 * Link: https://leetcode.com/problems/rotate-array/
 * Tags: Array, Math, Two Pointers
 * Constraints:
 *   1 <= nums.length <= 10^5
 *   -2^31 <= nums[i] <= (2^31) - 1
 *   0 <= k <= 10^5
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(k)
 * Abordagem:
 *   Calcula k %= n para lidar com rotações maiores que o tamanho do array; se k === 0 não há trabalho.
 *   Copia os últimos k elementos para um buffer temporário (end = nums.slice(n - k)).
 *   Desloca os primeiros n - k elementos k posições à direita, percorrendo de trás para frente para não sobrescrever.
 *   Copia o buffer de volta para as primeiras k posições do array.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function rotate(nums, k) {
  const n = nums.length;
  k %= n;
  const end = nums.slice(n - k);

  for (let i = n - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }
  for (let i = 0; i < k; i++) {
    nums[i] = end[i];
  }
}

// Exemplos rápidos
/* Exemplo 1
let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);  // esperado: [5,6,7,1,2,3,4]
*/
/* Exemplo 2
let nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);  // esperado: [3,99,-1,-100]
*/
