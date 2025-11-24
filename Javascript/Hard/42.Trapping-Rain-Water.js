/*
 * Link: https://leetcode.com/problems/trapping-rain-water/
 * Tags: Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack
 * Constraints:
 *   n == height.length
 *   1 <= n <= 2 * 10^4
 *   0 <= height[i] <= 10^5
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Varredura esquerda -> direita:
 *      Define leftWall como o índice do primeiro muro > 0.
 *      Para cada posição i após leftWall: se encontrar uma altura maior ou igual ao leftWall,
 *      o vale está fechado, então soma tempWater ao total, zera tempWater e atualiza leftWall = i.
 *      Caso contrário (muro mais baixo), acumula água potencial: tempWater += (height[leftWall] - height[i]).
 *      Ao final dessa varredura, se tempWater > 0: o último vale permaneceu aberto. Nesse caso é feita a varredura 2.
 *   Varredura direita -> esquerda:
 *      Percorre de n - 1 até leftWall (inclusive) mantendo rightWall como índice da maior parede encontrada até agora vindo da direita.
 *      Para cada i, se encontrar uma altura maior ou igual ao rightWall, atualiza rightWall = i (nova parede mais alta da direita).
 *      Caso contrário, soma água real: totalWater += (height[rightWall] - height[i]).
 * @param {number[]} height
 * @return {number}
 */

function trap(height) {
  const n = height.length;
  let totalWater = 0;
  let tempWater = 0;
  let leftWall = null;

  for (let i = 0; i < n; i++) {
    if (leftWall === null) {
      if (height[i] > 0) {
        leftWall = i;
      }
      continue;
    }

    if (height[i] >= height[leftWall]) {
      totalWater += tempWater;
      tempWater = 0;
      leftWall = i;
    } else {
      tempWater += height[leftWall] - height[i];
    }
  }

  if (tempWater > 0 && leftWall < n - 1) {
    let rightWall = null;
    for (let i = n - 1; i >= leftWall; i--) {
      if (rightWall === null || height[i] >= height[rightWall]) {
        rightWall = i;
      } else {
        totalWater += height[rightWall] - height[i];
      }
    }
  }

  return totalWater;
}

// Exemplos rápidos
/* Exemplo 1
const height = [4, 2, 3];
console.log(trap(height)); // esperado: 1
*/
/* Exemplo 2
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // esperado: 6
*/
/* Exemplo 3
const height = [4,2,0,3,2,5];
console.log(trap(height)); // esperado: 9
*/
