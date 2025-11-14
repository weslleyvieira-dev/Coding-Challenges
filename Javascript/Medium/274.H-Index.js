/*
 * Link: https://leetcode.com/problems/h-index/
 * Tags: Array, Sorting, Counting Sort
 * Constraints:
 *   n == citations.length
 *   1 <= n <= 5000
 *   0 <= citations[i] <= 1000
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(n)
 * Abordagem:
 *   Bucket/counting: construir um histograma limitado a 0..papers (agrupando >= papers em papers).
 *   Então acumular de papers para 0 até encontrar o maior i com pelo menos i artigos com >= i citações.
 * @param {number[]} citations
 * @return {number}
 */

function hIndex(citations) {
  let papers = citations.length;
  let counts = new Array(papers + 1).fill(0);

  for (let c of citations) {
    counts[Math.min(c, papers)]++;
  }

  let total = 0;
  for (let i = papers; i >= 0; i--) {
    total = total + counts[i];
    if (total >= i) {
      return i;
    }
  }

  return 0;
}

// Exemplos rápidos
/* Exemplo 1
let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));   // esperado: 3
*/
/* Exemplo 2
let citations = [1, 3, 1];
console.log(hIndex(citations));   // esperado: 1
*/
