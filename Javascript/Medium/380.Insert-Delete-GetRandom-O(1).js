/*
 * Link: https://leetcode.com/problems/insert-delete-getrandom-o1/
 * Tags: Array, Hash Table, Math, Design, Randomized
 * Constraints:
 *   -2^31 <= val <= 2^31 - 1
 *   At most 2 * 10^5 calls will be made to insert, remove, and getRandom.
 *   There will be at least one element in the data structure when getRandom is called.
 * Complexidade:
 *   Tempo: O(1)
 *   Espaço: O(n)
 * Abordagem:
 *   Construtor:
 *     - Array com os valores (this.array)
 *     - Map value -> index no array (this.pos)
 *   Insert(val):
 *     - Se já existe em this.pos, retorna false.
 *     - Caso contrário, registra índice atual (array.length) em this.pos e faz push no array. Retorna true.
 *   Remove(val):
 *     - Se não existe em this.pos, retorna false.
 *     - Caso exista, pega o índice (index) e o último elemento (last),
 *       move last para index, atualiza this.pos.set(last, index), faz pop() e this.pos.delete(val). Retorna true.
 *     - Essa troca evita “buracos”, mantém o array denso e garante O(1).
 *   GetRandom:
 *     - Sorteia um índice em [0, this.array.length) e retorna this.array[i].
 */

class RandomizedSet {
  constructor() {
    this.array = [];
    this.pos = new Map();
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.pos.has(val)) {
      return false;
    } else {
      this.pos.set(val, this.array.length);
      this.array.push(val);
      return true;
    }
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.pos.has(val)) {
      return false;
    } else {
      const index = this.pos.get(val);
      const last = this.array[this.array.length - 1];

      this.array[index] = last;
      this.pos.set(last, index);
      this.array.pop();
      this.pos.delete(val);

      return true;
    }
  }

  /**
   * @return {number}
   */
  getRandom() {
    const i = Math.floor(Math.random() * this.array.length);
    return this.array[i];
  }
}

// Exemplos rápidos

/* Exemplo 1
let randomizedSet = new RandomizedSet(); // []
console.log([
  randomizedSet.insert(1),    // true  (set: [1])
  randomizedSet.remove(2),    // false (2 não existe)
  randomizedSet.insert(2),    // true  (set: [1,2])
  randomizedSet.getRandom(),  // 1 ou 2
  randomizedSet.remove(1),    // true  (set: [2])
  randomizedSet.insert(2),    // false (já existe)
  randomizedSet.getRandom(),  // 2
]);
*/
