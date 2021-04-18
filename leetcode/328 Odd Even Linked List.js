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

function getLast (node) {
    
    if(node.next) return getLast(node.next);
    else return node;
    
} 
var oddEvenList = function(head) {
    
    if(!head||!head.next) return head;
    if(!head.next.next) {
        return head;
    }
    else return traverse(head.next.next, new ListNode(head.val, null), new ListNode(head.next.val, null));
    
    function traverse (currNode, odds, evens, isOdd = true){
        
        if(isOdd) {
            getLast(odds).next = new ListNode (currNode.val, null);
        }else getLast(evens).next = new ListNode (currNode.val, null);
        if(!currNode.next) {
            getLast(odds).next = evens;
            return odds;
        }else {
            return traverse(currNode.next, odds, evens, !isOdd)
        }
        
    }
    
};
