/*
 * Link: https://leetcode.com/problems/fizz-buzz/
 * Tags: Math, String
 * Constraints:
 *   1 <= n <= 10^4
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   O array de resposta é inicializado com tamanho n.
 *   Para cada iteração o valor de i é avaliado conforme as regras do jogo e
 *   o valor adequado é atribuído ao array de resposta.
 * @param {number} n
 * @return {string[]}
 */

function fizzBuzz(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    let currentString = "";
    if (i % 3 === 0) {
      currentString += "Fizz";
    }
    if (i % 5 === 0) {
      currentString += "Buzz";
    }
    if (!currentString) {
      currentString = String(i);
    }
    answer.push(currentString);
  }

  return answer;
}

// Exemplos rápidos
// console.log(fizzBuzz(3)); // esperado: ["1","2","Fizz"]
// console.log(fizzBuzz(5)); // esperado: ["1","2","Fizz","4","Buzz"]
// console.log(fizzBuzz(15)); // esperado: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
