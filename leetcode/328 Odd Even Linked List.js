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

//updated to track last nodes, now faster than 61% of submissions
var oddEvenList = function(head) {
    
    if(!head||!head.next) return head;
    if(!head.next.next) {
        return head;
    }
    else return traverse(head.next.next, new ListNode(head.val, null), new ListNode(head.next.val, null));
    
    function traverse (currNode, odds, evens, isOdd = true, lastOdd = odds, lastEven = evens){
        
        if(isOdd) {
            lastOdd.next = new ListNode (currNode.val, null);
        }else lastEven.next = new ListNode (currNode.val, null);
        if(!currNode.next) {
            (isOdd) ? lastOdd.next.next = evens : lastOdd.next = evens;
            return odds;
        }else {
            return traverse(currNode.next, odds, evens, !isOdd, (isOdd) ? lastOdd.next : lastOdd, (!isOdd) ? lastEven.next : lastEven)
        }
        
    }
    
};
