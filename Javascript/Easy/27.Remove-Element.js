/*
 * Link: https://leetcode.com/problems/remove-element/
 * Tags: Array, Two Pointers
 * Constraints:
 *   0 <= nums.length <= 100
 *   0 <= nums[i] <= 50
 *   0 <= val <= 100
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Dois ponteiros: i percorre o array lendo e index aponta para a próxima posição de escrita em nums.
 *   Quando nums[i] !== val, copiamos nums[i] para nums[index] e incrementamos index.
 *   Valores iguais a val são ignorados e serão sobrescritos pelos próximos valores válidos.
 *   Ao final, index é o novo comprimento k dos elementos válidos em nums (nos primeiros k índices).
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

// Exemplos rápidos
// console.log(removeElement([3, 2, 2, 3], 3));       // esperado: 2
// console.log(removeElement([0,1,2,2,3,0,4,2], 2));  // esperado: 5
