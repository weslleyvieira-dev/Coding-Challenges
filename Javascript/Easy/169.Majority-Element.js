/*
 * Link: https://leetcode.com/problems/majority-element/
 * Tags: Array, Hash Table, Divide and Conquer, Sorting, Counting
 * Constraints:
 *   n == nums.length
 *   1 <= n <= 5 * 10^4
 *   -10^9 <= nums[i] <= 10^9
 *   The input is generated such that a majority element will exist in the array.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(n)
 * Abordagem:
 *   Percorre o array uma vez mantendo um mapa de frequências (objeto).
 *   Para cada valor nums[i], incrementa sua contagem e compara com a maior contagem registrada até então.
 *   Se ultrapassar, atualiza o registro (valor e contagem). Ao final retorna o valor com maior frequência.
 * @param {number[]} nums
 * @return {number}
 */

function majorityElement(nums) {
  let map = {};
  let major = { index: 0, count: 0 };

  for (let i of nums) {
    map[i] = map[i] + 1 || 1;
    if (map[i] > major.count) {
      major.index = i;
      major.count = map[i];
    }
  }

  return major.index;
}

// Exemplos rápidos
// console.log(answer());   // esperado: ...
/* Exemplo 1
let nums = [3, 2, 3];
console.log(majorityElement(nums));   // esperado: 3
*/
/* Exemplo 2
let nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));   // esperado: 2
*/
