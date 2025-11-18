/*
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Tags: Array, Prefix Sum
 * Constraints:
 *   2 <= nums.length <= 10^5
 *   -30 <= nums[i] <= 30
 *   The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(n)
 * Abordagem:
 *   Construir um array de prefixos: prefix[i] = produto de nums[0..i-1], com prefix[0] = 1.
 *   Construir um array de sufixos: suffix[i] = produto de nums[i+1..n-1], com suffix[n-1] = 1.
 *   Para cada índice i, a resposta é prefix[i] * suffix[i], que representa o produto de
 *   todos os elementos à esquerda e à direita de i (exceto o próprio nums[i]).
 * @param {number[]} nums
 * @return {number[]}
 */

function fillPrefix(nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  return prefix;
}

function fillSuffix(nums) {
  let n = nums.length;
  let suffix = new Array(n).fill(1);

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  return suffix;
}

function productExceptSelf(nums) {
  let n = nums.length;
  let prefix = fillPrefix(nums);
  let suffix = fillSuffix(nums);
  let products = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    products[i] = prefix[i] * suffix[i];
  }

  return products;
}

// Exemplos rápidos
/* Exemplo 1
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // esperado: [24,12,8,6]
*/

/* Exemplo 2
const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums)); // esperado: [0,0,9,0,0]
*/
