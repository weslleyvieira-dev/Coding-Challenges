/*
 * Link: https://leetcode.com/problems/is-subsequence/
 * Tags: Two Pointers, String, Dynamic Programming
 * Constraints:
 *   0 <= s.length <= 100
 *   0 <= t.length <= 10^4
 *   s and t consist only of lowercase English letters.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Usa dois ponteiros: i percorre t e j percorre s.
 *   Avança i sempre; quando t[i] === s[j], avança j.
 *   Se ao final j === s.length, então s é subsequência de t.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while (i < t.length && j < s.length) {
    if (t[i] === s[j]) {
      j++;
    }
    i++;
  }

  return s.length === j;
}

// Exemplos rápidos
/* Exemplo 1
let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));   // esperado: true
*/
/* Exemplo 2
let s = "axc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));   // esperado: false
*/
