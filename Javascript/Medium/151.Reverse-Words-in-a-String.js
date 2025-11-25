/*
 * Link: https://leetcode.com/problems/reverse-words-in-a-string/
 * Tags: Two Pointers, String
 * Constraints:
 *   1 <= s.length <= 10^4
 *   s contains English letters (upper-case and lower-case), digits, and spaces ' '.
 *   There is at least one word in s.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Aplica trim para remover espaços extras nas pontas.
 *   Percorre a string de trás para frente, se s[i] é espaço significa fim de uma palavra:
 *   Copia a palavra (slice), adiciona à string resultado e um espaço.
 *   Reduz s para a parte não processada (slice 0..i) e aplica trim para remover múltiplos espaços.
 *   Quando chega ao início (i === 0) e não é espaço, adiciona a última palavra restante.
 *   Retorna resultado com trim final para remover possível espaço extra.
 * @param {string} s
 * @return {string} s
 */

function reverseWords(s) {
  let reverse = "";
  s = s.trim();

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      reverse += s.slice(i + 1, s.length);
      reverse += " ";
      s = s.slice(0, i).trim();
    } else if (i === 0) {
      reverse += s.trim();
    }
  }

  return reverse.trim();
}

/*
 * Abordagem alternativa:
 *   Usa split(" ") para gerar um array, incluindo entradas vazias onde há múltiplos espaços.
 *   Percorre de trás para frente. Ignora itens vazios (múltiplos espaços) e adiciona apenas palavras válidas em reverse.
 *   Junta com join(" ") garantindo um único espaço entre palavras.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(n)
 */

/*
function reverseWords(s) {
  let reverse = [];
  s = s.split(" ");

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i]) {
      reverse.push(s[i]);
    }
  }

  return reverse.join(" ");
}
*/

// Exemplos rápidos
/* Exemplo 1
console.log(reverseWords("the sky is blue"));   // esperado: "blue is sky the"
*/
/* Exemplo 2
console.log(reverseWords("  hello world  "));   // esperado: "world hello"
*/
/* Exemplo 3
console.log(reverseWords("a good   example"));  // esperado: "example good a"
*/
