/*
 * Link: https://leetcode.com/problems/text-justification/
 * Tags: Array, String, Simulation
 * Constraints:
 *   1 <= words.length <= 300
 *   1 <= words[i].length <= 20
 *   words[i] consists of only English letters and symbols.
 *   1 <= maxWidth <= 100
 *   words[i].length <= maxWidth
 * Complexidade:
 *   Tempo: O(n * maxWidth)
 *   Espaço: O(n * maxWidth)
 * Abordagem:
 *   Monta linhas incrementando palavras até atingir maxWidth.
 *   Quando a linha "fecha", chama justifyLine:
 *     Se for última linha ou tiver só uma palavra: alinha à esquerda e completa com espaços no fim.
 *     Caso contrário: distribui espaços entre gaps de forma uniforme; extras vão da esquerda para a direita.
 *   justifyLine calcula:
 *     totalChars (soma de letras), gaps (n-1), totalSpaces = maxWidth - totalChars.
 *     even = floor(totalSpaces / gaps) e extra = totalSpaces % gaps, aplicando nos gaps.
 *   Retorna o array de linhas justificadas.
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

function justifyLine(line, maxWidth, isLast) {
  const lineWords = line.trim().split(/\s+/).filter(Boolean);

  if (isLast || lineWords.length === 1) {
    const left = lineWords.join(" ");
    return left + " ".repeat(Math.max(0, maxWidth - left.length));
  }

  const totalChars = lineWords.reduce((sum, w) => sum + w.length, 0);
  const gaps = lineWords.length - 1;
  const totalSpaces = maxWidth - totalChars;
  const even = Math.floor(totalSpaces / gaps);
  let extra = totalSpaces % gaps;

  let justified = "";
  for (let j = 0; j < lineWords.length; j++) {
    justified += lineWords[j];
    if (j < gaps) {
      justified += " ".repeat(even + (extra > 0 ? 1 : 0));
      if (extra > 0) extra--;
    }
  }

  return justified;
}

function fullJustify(words, maxWidth) {
  let line = "";
  let output = [];

  for (let i = 0; i < words.length; i++) {
    const isLast = i === words.length - 1;
    if (words[i].length + line.length > maxWidth) {
      output.push(justifyLine(line, maxWidth, false));
      line = "";
    }

    if (words[i].length + line.length < maxWidth) {
      line += words[i];
      line += " ";
      if (isLast) {
        output.push(justifyLine(line, maxWidth, true));
      }
    } else {
      line += words[i];
      output.push(justifyLine(line, maxWidth, isLast));
      line = "";
    }
  }

  return output;
}

// Exemplos rápidos
/* Exemplo 1
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth)); // esperado: ["This    is    an", "example  of text", "justification.  "];
*/
/* Exemplo 2
const words = ["What", "must", "be", "acknowledgment", "shall", "be"];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth)); // esperado: ["What   must   be", "acknowledgment  ", "shall be        "];
*/
/* Exemplo 3
const words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
const maxWidth = 20;
console.log(fullJustify(words, maxWidth)); // esperado: [ "Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "];
*/
