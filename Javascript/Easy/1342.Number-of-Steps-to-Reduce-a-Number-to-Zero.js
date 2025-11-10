/*
 * Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * Tags: Math, Bit Manipulation
 * Constraints:
 *   0 <= num <= 106
 * Complexidade:
 *   Tempo: O(logn)
 *   Espaço: O(1)
 * Abordagem:
 *   O contador é inicializado fora do laço.
 *   Para cada operação (divisão ou subtração), o contador é incrementado até que num chegue a 0.
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function (num) {
  let steps = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      steps++;
    } else {
      num = num - 1;
      steps++;
    }
  }

  return steps;
};

// Exemplos rápidos
// console.log(numberOfSteps(14));  // esperado: 6
// console.log(numberOfSteps(8));   // esperado: 4
// console.log(numberOfSteps(123)); // esperado: 12
