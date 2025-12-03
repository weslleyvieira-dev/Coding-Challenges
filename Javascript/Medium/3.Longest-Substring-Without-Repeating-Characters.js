/*
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Tags: Hash Table, String, Sliding Window
 * Constraints:
 *   0 <= s.length <= 5 * 10^4
 *   s consists of English letters, digits, symbols and spaces.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(k), onde k é o número de caracteres distintos na janela
 * Abordagem:
 *   Sliding window com dois ponteiros (left e right) e um Set para rastrear caracteres na janela.
 *   Avança right; enquanto s[right] já estiver no Set, remove s[left] e avança left.
 *   Adiciona s[right] ao Set e atualiza maxLen com o maior tamanho entre maxLen e a janela atual.
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLen = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Exemplos rápidos
/* Exemplo 1
console.log(lengthOfLongestSubstring("abcabcbb")); // esperado: 3
*/
/* Exemplo 2
console.log(lengthOfLongestSubstring("bbbbb"));    // esperado: 1
*/
/* Exemplo 3
console.log(lengthOfLongestSubstring("pwwkew"));   // esperado: 3
*/
