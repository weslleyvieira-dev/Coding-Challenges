/*
 * Link: https://leetcode.com/problems/longest-common-prefix/
 * Tags: Array, String, Trie
 * Constraints:
 *   1 <= strs.length <= 200
 *   0 <= strs[i].length <= 200
 *   strs[i] consists of only lowercase English letters if it is non-empty.
 * Complexidade:
 *   Tempo: O(N * M) (N = número de strings, M = comprimento da menor string)
 *   Espaço: O(1)
 * Abordagem:
 *   Encontra a menor string do array para usar como base de comparação.
 *   Para cada string do array, compara caractere por caractere com a base.
 *   Reduz o tamanho do prefixo quando encontra divergência.
 *   Retorna vazio se o prefixo chegar a 0.
 *   Retorna o prefixo comum final.
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < prefix.length) prefix = strs[i];
  }

  let length = prefix.length;
  for (let i = 0; i < strs.length && length; i++) {
    let j = 0;
    while (j < length && prefix[j] === strs[i][j]) {
      j++;
    }
    length = j;
    if (!length) return "";
  }

  return prefix.slice(0, length);
}

// Exemplos rápidos
/* Exemplo 1
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // esperado: "fl"
*/
/* Exemplo 2
const strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)); // esperado: ""
*/
