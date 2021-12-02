/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = head => {
    if (head === null) return head

    let even = head.next, odd = head, evenHead = even

    while (even != null && even.next != null) {
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }

    odd.next = evenHead
    return head

}