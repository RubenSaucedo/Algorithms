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

var mergeTwoLists = function(listNode1, listNode2) {
  if (listNode1 === null || listNode2 === null) {
    return listNode2 ? listNode2 : listNode1
  }
  

  let A = listNode1;
  let B = listNode2;
  let T = null;

  let head = A.val <= B.val ? A : B;

  while (A && B) {
    if(A.val <= B.val) {
      if (A.next === null || A.next.val > B.val) {
        T = A.next;
        A.next = B;
        A = T;
      } else {
        A = A.next
      }
    } else {
      if (B.next === null || B.next.val > A.val) {
        T = B.next;
        B.next = A;
        B = T;
      } else {
        B = B.next
      }
    }
  }
  

  return head;
}

// spread the rest of the pending list
// [-9,-7,-3,-3,-1,2,3]
const l1 = new LinkedList();
l1.add(-9);
l1.add(-7);
l1.add(-3);
l1.add(-3);
l1.add(-1);
l1.add(2);
l1.add(3);
// l1.print();

// [-7,-7,-6,-6,-5,-3,2,4]
const l2 = new LinkedList();
l2.add(-7);
l2.add(-7);
l2.add(-6);
l2.add(-6);
l2.add(-5);
l2.add(-3);
l2.add(2);
l2.add(4);
// l2.print();

const resList = mergeTwoLists(l1.head, l2.head);
resList.print();