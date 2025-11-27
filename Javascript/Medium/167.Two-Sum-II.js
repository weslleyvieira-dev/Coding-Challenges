/*
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Tags: Array, Two Pointers, Binary Search
 * Constraints:
 *   2 <= numbers.length <= 3 * 10^4
 *   -1000 <= numbers[i] <= 1000
 *   numbers is sorted in non-decreasing order.
 *   -1000 <= target <= 1000
 *   The tests are generated such that there is exactly one solution.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Usa dois ponteiros: left no início e right no fim do array ordenado.
 *   Calcula sum = numbers[left] + numbers[right].
 *   Se sum === target, retorna [left + 1, right + 1] (índices 1-based exigidos pelo problema).
 *   Se sum > target, move right para a esquerda; caso contrário, move left para a direita.
 *   Por estar ordenado, essa estratégia encontra a solução em tempo linear.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

// Exemplos rápidos
/* Exemplo 1
let numbers = [2,7,11,15];
let target = 9;
console.log(twoSum(numbers, target)); // esperado: [1, 2]
*/
/* Exemplo 2
let numbers = [2,3,4];
let target = 6;
console.log(twoSum(numbers, target)); // esperado: [1, 3]
*/
/* Exemplo 3
let numbers = [-1, 0];
let target = -1;
console.log(twoSum(numbers, target));  // esperado: [1, 2]
*/
