/*
 * Link: https://leetcode.com/problems/ransom-note/
 * Tags: Hash Table, String, Counting
 * Constraints:
 *   1 <= ransomNote.length, magazine.length <= 105
 *   ransomNote and magazine consist of lowercase English letters.
 * Complexidade:
 *   Tempo: O(m + n)
 *   Espaço: O(k) -> 1 <= k <= 26
 * Abordagem:
 *   Constrói um mapa de frequências a partir de magazine. Para cada caractere de
 *   ransomNote verifica se há contagem disponível e decrementa; se faltar alguma letra,
 *   retorna false; caso contrário retorna true.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  let map = {};

  for (let char of magazine) {
    map[char] = map[char] + 1 || 1;
  }

  for (let char of ransomNote) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }

  return true;
}

/*
 *   Abordagem alternativa:
 *      Para cada caractere de `ransomNote`, busca-se uma ocorrência no `magazine`.
 *      Ao encontrar, a letra é adicionada ao array auxiliar e a ocorrência é removida de
 *      `magazine`. Se algum caractere não for encontrado, a função retorna false;
 *      se todos forem encontrados, retorna true.
 *
 *   Complexidade:
 *      Tempo: O(n * m)
 *      Espaço: O(n + m)
 */

/*
function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  let array = [];

  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazine.length; j++) {
      if (ransomNote[i] === magazine[j]) {
        array.push(magazine[j]);
        magazine = magazine.slice(0, j) + magazine.slice(j + 1);
        break;
      }
      if (magazine.length == j + 1) {
        return false;
      }
    }
  }

  if (array.length === ransomNote.length) {
    return true;
  } else return false;
}
*/

// Exemplos rápidos
// console.log(canConstruct("a", "b"));     // esperado: false
// console.log(canConstruct("aa", "ab"));   // esperado: false
// console.log(canConstruct("aa", "aab"));  // esperado: true
