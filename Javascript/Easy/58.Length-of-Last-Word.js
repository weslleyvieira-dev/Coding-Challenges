/*
 * Link: https://leetcode.com/problems/length-of-last-word/
 * Tags: String
 * Constraints:
 *   1 <= s.length <= 10^4
 *   s consists of only English letters and spaces ' '.
 *   There will be at least one word in s.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Percorre a string de trás para frente com dois laços while distintos.
 *   Primeiro laço: decrementa i enquanto houver espaços finais (efeito de trim).
 *   Segundo laço: conta caracteres até encontrar um espaço ou chegar ao início.
 *   O contador acumulado é o tamanho da última palavra.
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;

  let count = 0;
  while (i >= 0 && s[i] !== " ") {
    if (s[i] !== " ") {
      count++;
    } else break;
    i--;
  }

  return count;
}

// Exemplos rápidos
/* Exemplo 1
console.log(lengthOfLastWord("Hello World"));                   // esperado: 5
*/
/* Exemplo 2
console.log(lengthOfLastWord("   fly me   to   the moon  "));   // esperado: 4
*/
/* Exemplo 3
console.log(lengthOfLastWord("luffy is still joyboy"));         // esperado: 6
*/
