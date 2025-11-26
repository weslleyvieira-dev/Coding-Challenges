/*
 * Link: https://leetcode.com/problems/zigzag-conversion/
 * Tags: String
 * Constraints:
 *   1 <= s.length <= 1000
 *   s consists of English letters (lower-case and upper-case), ',' and '.'.
 *   1 <= numRows <= 1000
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Se numRows === 1, retorna s (sem zigue-zague).
 *   Define salto = 2 * (numRows - 1), que é o tamanho de um ciclo vertical+diagonal.
 *   Para cada linha i:
 *       Percorre j iniciando em i e somando salto, adicionando s[j] (colunas verticais).
 *       Se 0 < i < numRows - 1 e j + salto - 2*i < s.length, adiciona s[j + salto - 2*i] (diagonais).
 *   Retorna a string acumulada.
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convert(s, numRows) {
  if (numRows === 1) return s;

  let output = "";
  let jump = (numRows - 1) * 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += jump) {
      output += s[j];

      if (i > 0 && i < numRows - 1 && j + jump - 2 * i < s.length) {
        output += s[j + jump - 2 * i];
      }
    }
  }
  return output;
}

// Exemplos rápidos
/* Exemplo 1
let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows)); // esperado: "PAHNAPLSIIGYIR"
*/
/* Exemplo 1
let s = "PAYPALISHIRING";
let numRows = 4;
console.log(convert(s, numRows)); // esperado: "PINALSIGYAHRPI"
*/
