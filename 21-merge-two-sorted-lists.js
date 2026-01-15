// 21. mege two sorted lists - proposed solution

/**
 * input
 * Two *sorted* linked lists
 * 
 * output
 * A merged sorted linked list
 * 
 * Examples
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Breakdown solution
 *  1. create a new list
 *  2. wire both links
 */

import { LinkedList } from './data-structures/linked-list.js'

var mergeTwoLists = function(list1, list2) {
  let A = list1.head;
  let B = list2.head;

  const list3 = new LinkedList();
  // Iterate through the list
  while(A || B) {
    // null cases
    if(A === null) {
      list3.add(B.val)
      B = B.next;
      continue;
    }

    if(B === null) {
      list3.add(A.val)
      A = A.next;
      continue;
    }

    // no null cases
    if (A.val <= B.val) {
      // 1. A <= B
      list3.add(A.val);
      A = A.next;
    } else if (A.val > B.val) {
      // 2. A > B
      list3.add(B.val);
      B = B.next;
    }
  }

  return list3;
}

// spread the rest of the pending list

const l1 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(4);
// l1.print();

const l2 = new LinkedList();
l2.add(1);
l2.add(3);
l2.add(4);
l2.add(6);
l2.add(6);
l2.add(6);
// l2.print();

const resList = mergeTwoLists(l1, l2);
resList.print();