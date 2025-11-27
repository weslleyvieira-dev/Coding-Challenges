/*
 * Link: https://leetcode.com/problems/valid-palindrome/
 * Tags: Two Pointers, String
 * Constraints:
 *   1 <= s.length <= 2 * 10^5
 *   s consists only of printable ASCII characters.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(n)
 * Abordagem:
 *   Normaliza a string removendo caracteres não alfanuméricos e convertendo para minúsculas.
 *   Em seguida, usa dois ponteiros (início/fim) comparando caracteres até se cruzarem.
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Exemplos rápidos
/* Exemplo 1
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));   // esperado: true
*/
/* Exemplo 2
const s = "race a car";
console.log(isPalindrome(s));   // esperado: false
*/
/* Exemplo 3
const s = " ";
console.log(isPalindrome(s));   // esperado: true
*/
