/*
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * Tags: Array, Two Pointers
 * Constraints:
 *   1 <= nums.length <= 3 * 10^4
 *   -10^4 <= nums[i] <= 10^4
 *   nums is sorted in non-decreasing order.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Dois ponteiros: j aponta para a última posição escrita em nums (write pointer) e i percorre o array.
 *   Permitimos até duas ocorrências do mesmo valor. Mantemos um estado que indica se já gravamos a segunda
 *   ocorrência do valor atual (duplicated). Para cada nums[i]:
 *     - Se nums[i] === nums[j] e ainda não gravamos a segunda ocorrência, avançamos j, copiamos nums[i] e marcamos duplicated = true.
 *     - Se nums[i] > nums[j] (novo valor), avançamos j, copiamos nums[i] e resetamos duplicated = false.
 *   Isso compacta no início do array todas as ocorrências permitidas (no máximo duas) sem usar espaço extra.
 *   Ao final, k = j + 1 é o novo comprimento dos elementos válidos (nos primeiros k índices de nums).
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
  let j = 0;
  let duplicated = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[j] && !duplicated) {
      j++;
      nums[j] = nums[i];
      duplicated = true;
    } else if (nums[i] > nums[j]) {
      j++;
      nums[j] = nums[i];
      duplicated = false;
    }
  }

  return j + 1;
}

// Exemplos rápidos
/* Exemplo 1
let nums = [1,1,1,2,2,3];
console.log(nums.slice(0, removeDuplicates(nums)));   // esperado: [1, 1, 2, 2, 3]
*/
/* Exemplo 2
let nums = [0,0,1,1,1,1,2,3,3];
console.log(nums.slice(0, removeDuplicates(nums)));   // esperado: [0,0,1,1,2,3,3]
*/
