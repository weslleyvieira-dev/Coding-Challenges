/*
 * Link: https://leetcode.com/problems/gas-station/
 * Tags: Array, Greedy
 * Constraints:
 *   n == gas.length == cost.length
 *   1 <= n <= 10^5
 *   0 <= gas[i], cost[i] <= 10^4
 *   The input is generated such that the answer is unique.
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Percorre o array uma vez, mantendo dois acumuladores:
 *     - totalGas = soma de (gas[i] - cost[i]) em todas as posições (verifica possibilidade global).
 *     - currentGas = soma de (gas[i] - cost[i]) desde o índice start atual.
 *   Se currentGas ficar negativo em i, significa que não é possível chegar a i+1
 *   partindo de start (nem de qualquer índice entre start e i).
 *   Então: start = i + 1 e currentGas = 0.
 *   Ao final, se totalGas >= 0, retorna start; caso contrário, retorna -1.
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

function canCompleteCircuit(gas, cost) {
  let totalGas = 0;
  let currentGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return totalGas >= 0 ? start : -1;
}

// Exemplos rápidos
/* Exemplo 1
let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost)); // esperado: 3
*/
/* Exemplo 2
let gas = [2, 3, 4];
let cost = [3, 4, 3];
console.log(canCompleteCircuit(gas, cost)); // esperado: -1
*/
