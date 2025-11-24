/*
 * Link: https://leetcode.com/problems/integer-to-roman/
 * Tags: Hash Table, Math, String
 * Constraints:
 *   1 <= num <= 3999
 * Complexidade:
 *   Tempo: O(1)
 *   Espaço: O(1)
 * Abordagem:
 *   Usa uma lista ordenada de pares valor → símbolo em ordem decrescente,
 *   incluindo casos subtrativos (900, 400, 90, 40, 9, 4).
 *   Iterar sobre os pares: enquanto num >= valor, anexar o símbolo e subtrair o valor.
 * @param {number} num
 * @return {string}
 */

function intToRoman(num) {
  const romanMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  let result = "";

  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
    if (num === 0) break;
  }

  return result;
}

// Exemplos rápidos
/* Exemplo 1
console.log(intToRoman(3749));  // esperado: "MMMDCCXLIX"
*/
/* Exemplo 2
console.log(intToRoman(58));    // esperado: "LVIII"
*/
/* Exemplo 3
console.log(intToRoman(1994));  // esperado: "MCMXCIV"
*/
