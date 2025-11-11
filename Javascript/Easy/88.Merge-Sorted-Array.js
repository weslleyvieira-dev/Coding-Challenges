/*
 * Link: https://leetcode.com/problems/merge-sorted-array/
 * Tags: Array, Two Pointers, Sorting
 * Constraints:
 *   nums1.length == m + n
 *   nums2.length == n
 *   0 <= m, n <= 200
 *   1 <= m + n <= 200
 *   -109 <= nums1[i], nums2[j] <= 109
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Usa três ponteiros a partir do fim: first = m - 1 (último válido de nums1), second = n - 1 (último de nums2) e i = m + n - 1 (fim do buffer em nums1).
 *   Enquanto second >= 0, compara nums1[first] e nums2[second] e escreve o maior em nums1[i].
 *   Decrementa i e o ponteiro de origem. Se first esgotar, o laço continua copiando os elementos restantes de nums2.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      i--;
      first--;
    } else {
      nums1[i] = nums2[second];
      i--;
      second--;
    }
  }
}

// Exemplos rápidos
// Exemplo 1
/*
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);   // esperado: [1,2,2,3,5,6];
*/
// -----------------------------------------------
// Exemplo 2
/*
let nums1 = [1, 2],
  m = 2,
  nums2 = [],
  n = 0;
merge(nums1, m, nums2, n);
console.log(nums1);   // esperado: [1, 2];
*/
// -----------------------------------------------
// Exemplo 3
/*
let nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);   // esperado: [1];
*/
