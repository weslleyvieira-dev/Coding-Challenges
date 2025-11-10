/*
 * Link: https://leetcode.com/problems/running-sum-of-1d-array/
 * Tags: Array, Prefix Sum
 * Constraints:
 *   1 <= nums.length <= 1000
 *   -10^6 <= nums[i] <= 10^6
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   O primeiro elemento do resultado é o próprio primeiro elemento de entrada.
 *   Construímos um prefix sum acumulando valores enquanto iteramos o array.
 * @param {number[]} nums
 * @return {number[]}
 */

function runningSum(nums) {
  const output = new Array(nums.length);
  output[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] + nums[i];
  }

  return output;
}

// Exemplos rápidos
// console.log(runningSum([1, 2, 3, 4]));     // esperado: [1,3,6,10]
// console.log(runningSum([1, 1, 1, 1, 1]));  // esperado: [1,2,3,4,5]
// console.log(runningSum([3, 1, 2, 10, 1])); // esperado: [3,4,6,16,17]
