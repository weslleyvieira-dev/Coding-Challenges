/*
 * Link: https://leetcode.com/problems/isomorphic-strings/
 * Tags: Hash Table, String
 * Constraints:
 *   1 <= s.length <= 5 * 10^4
 *   t.length == s.length
 *   s and t consist of any valid ascii character.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Compara o padrão de primeiros índices de ocorrência entre s e t.
 *   Para cada posição i, guarda o primeiro índice em que cada caractere apareceu (sMap e tMap).
 *   Se em algum i os primeiros índices não coincidirem (sMap[s[i]] !== tMap[t[i]]), os padrões divergem e não são isomórficas.
 *   Caso todos coincidam, existe um mapeamento bijetivo entre os caracteres de s e t.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic(s, t) {
  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in sMap)) {
      sMap[s[i]] = i;
    }

    if (!(t[i] in tMap)) {
      tMap[t[i]] = i;
    }

    if (sMap[s[i]] !== tMap[t[i]]) {
      return false;
    }
  }

  return true;
}

// Exemplos rápidos
/* Exemplo 1
const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t)); // esperado: true
*/
/* Exemplo 2
const s = "foo";
const t = "bar";
console.log(isIsomorphic(s, t)); // esperado: false
*/
/* Exemplo 3
const s = "paper";
const t = "title";
console.log(isIsomorphic(s, t)); // esperado: true
*/
