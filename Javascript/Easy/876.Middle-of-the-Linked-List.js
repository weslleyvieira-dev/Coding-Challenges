/*
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/
 * Tags: Linked List, Two Pointers
 * Constraints:
 *   The number of nodes in the list is in the range [1, 100].
 *   1 <= Node.val <= 100
 * Complexidade:
 *   Tempo: O(n)
 *   Espaço: O(1)
 * Abordagem:
 *   Dois ponteiros: um rápido (avança 2 nós) e um lento (avança 1 nó).
 *   Quando o rápido alcançar o fim, o lento estará no meio.
 * @param {ListNode} head
 * @return {ListNode}
 */

function middleNode(head) {
  let middle = head;
  let end = head;

  while (end && end.next) {
    middle = middle.next;
    end = end.next.next;
  }

  return middle;
}

//Exemplos rápidos
//"Javascript/tests/876.Middle-of-the-Linked-List.test.js"

export default middleNode;
