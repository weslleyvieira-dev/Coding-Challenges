/*
 * Link: https://leetcode.com/problems/roman-to-integer/
 * Tags: Hash Table, Math, String
 * Constraints:
 *   1 <= s.length <= 15
 *   s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 *   It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Percorre da direita para a esquerda. Guarda o valor anterior (à direita).
 *   Se o valor atual >= anterior, então soma; caso contrário subtrai.
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let char = romanMap[s[i]];
    if (char >= prev) {
      result += char;
    } else {
      result -= char;
    }
    prev = char;
  }

  return result;
}

// Exemplos rápidos
/* Exemplo 1
console.log(romanToInt("III"));       // esperado: 3
*/
/* Exemplo 2
console.log(romanToInt("LVIII"));     // esperado: 58
*/
/* Exemplo 3
console.log(romanToInt("MCMXCIV"));   // esperado: 1994
*/
