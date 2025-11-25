/*
 * Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * Tags: Two Pointers, String, String Matching
 * Constraints:
 *   1 <= haystack.length, needle.length <= 10^4
 *   haystack and needle consist of only lowercase English characters.
 * Complexidade:
 *   Tempo: O(n * m)
 *   Espaço: O(1)
 * Abordagem:
 *   Varre a string haystack caractere a caractere tentando casar needle.
 *   Mantém um contador (count) de quantos caracteres já casaram.
 *   Quando o caractere atual coincide com needle[count], avança count.
 *   Se count chega a needle.length, retorna o índice inicial (i + 1 - count).
 *   Se ocorrer mismatch, retrocede i para o próximo início possível (i - count) e zera count.
 *   Retorna -1 se não encontrar.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function strStr(haystack, needle) {
  let count = 0;
  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[count]) {
      count++;
      if (count === needle.length) {
        return i + 1 - count;
      }
    } else {
      i = i - count;
      count = 0;
    }
  }

  return -1;
}

// Exemplos rápidos
/* Exemplo 1
let haystack = "sadbutsad";
let needle = "sad";
console.log(strStr(haystack, needle));  // esperado: 0
*/
/* Exemplo 2
let haystack = "leetcode";
let needle = "leeto";
console.log(strStr(haystack, needle));  // esperado: -1
*/
/* Exemplo 3
let haystack = "mississippi";
let needle = "issip";
console.log(strStr(haystack, needle));  // esperado: 4
*/
