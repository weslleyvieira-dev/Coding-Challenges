/*
 * Link: https://leetcode.com/problems/3sum/
 * Tags: Array, Two Pointers, Sorting
 * Constraints:
 *   3 <= nums.length <= 3000
 *   -10^5 <= nums[i] <= 10^5
 * Complexidade:
 *   Tempo: O(n^2)
 *   Espaço: O(1)
 * Abordagem:
 *   Ordena o array para facilitar o uso de dois ponteiros e o controle de duplicatas.
 *   Faz um loop em i (elemento fixo) e pula valores repetidos para evitar resultados duplicados.
 *   Para cada i, usa dois ponteiros: j = i + 1 e k = n - 1.
 *   Calcula sum = nums[i] + nums[j] + nums[k]:
 *       - Se sum < 0, aumenta j para obter um valor maior (array ordenado).
 *       - Se sum > 0, diminui k para obter um valor menor.
 *       - Se sum == 0, adiciona a tripla ao resultado, avanca j e pula duplicatas em j.
 *   Continua até j < k, repetindo para cada i.
 * @param {number[]} nums
 * @return {number[][]}
 */

function threeSum(nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return res;
}

// Exemplos rápidos
/* Exemplo 1
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));  // esperado: [[-1,-1,2],[-1,0,1]]
*/
/* Exemplo 2
let nums = [0, 1, 1];
console.log(threeSum(nums));  // esperado: []
*/
/* Exemplo 3
let nums = [0, 0, 0];
console.log(threeSum(nums));  // esperado: [[0, 0, 0]]
*/
