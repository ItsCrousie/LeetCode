/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const reverseList = (head) => {
    if (head == null || head.next == null) {
        return head;
    }
    let rest = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}

const printList = (head) => {
    let num = '';
    const temp = head;
    while (temp != null) {
        num += temp.next;
    }
    return num;
}

const convertNum = (head) => {
    return printList(reverseList(head));
}

var addTwoNumbers = function(l1, l2) {
    return convertNum(l1) + convertNum(l2)
};