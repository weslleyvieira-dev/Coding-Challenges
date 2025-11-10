// Testes para 876.Middle-of-the-Linked-List (arquivo separado em Javascript/tests)
// Executar: node "Javascript/tests/876.Middle-of-the-Linked-List.test.js"

import middleNode from "../Easy/876.Middle-of-the-Linked-List.js";

const cases = [
  { input: [1, 2, 3, 4, 5], expected: [3, 4, 5] },
  { input: [1, 2, 3, 4, 5, 6], expected: [4, 5, 6] },
];

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const buildList = (arr) => {
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const v of arr) {
    curr.next = new ListNode(v);
    curr = curr.next;
  }
  return dummy.next;
};

const listToArray = (node) => {
  const out = [];
  while (node) {
    out.push(node.val);
    node = node.next;
  }
  return out;
};

let allPassed = true;
for (const { input, expected } of cases) {
  const head = buildList(input);
  const res = middleNode(head);
  const arr = listToArray(res);
  const pass = JSON.stringify(arr) === JSON.stringify(expected);
  console.log(
    `Input: ${JSON.stringify(input)} | Output: ${JSON.stringify(
      arr
    )} | Expected: ${JSON.stringify(expected)} | ${pass ? "✅ OK" : "❌ FAIL"}`
  );
  if (!pass) allPassed = false;
}

console.log(
  "\nResumo:",
  allPassed ? "Todos os casos passaram ✅" : "Alguns casos falharam ❌"
);
