/*
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Tags: Array, Two Pointers
 * Constraints:
 *   1 <= nums.length <= 3 * 10^4
 *   -100 <= nums[i] <= 100
 *   nums is sorted in non-decreasing order.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Dois ponteiros: j aponta para a última posição com um valor único gravado e i percorre o array.
 *   Para cada i, comparamos nums[i] com nums[j]. Se forem diferentes, encontramos um novo valor único:
 *   avançamos j e copiamos nums[i] para nums[j].
 *   Assim, os valores duplicados são pulados e os únicos são compactados no início de nums.
 *   Ao final, k = j + 1 é o novo comprimento dos elementos únicos (nos primeiros k índices de nums).
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
}

// Exemplos rápidos
/* Exemplo 1
let nums = [1, 1, 2];
console.log(nums.slice(0, removeDuplicates(nums)));   // esperado: [1, 2]
*/
/* Exemplo 2
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(nums.slice(0, removeDuplicates(nums)));   // esperado: [0, 1, 2, 3, 4]
*/
