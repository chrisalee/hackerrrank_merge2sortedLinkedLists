// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    if(head1.data < head2.data) {
        head1.next = mergeLists(head1.next, head2);
        return head1;
    }
    head2.next = mergeLists(head1, head2.next);
    return head2;
}


/////////////////////////////////////////////

function mergeLists(head1, head2) {
    let merged = null
    let pointer1 = head1
    let pointer2 = head2
    let mergedPointer = merged
    while(pointer1 || pointer2) {
        if(!pointer1) {
            mergedPointer.next = pointer2
            break
        }
        
        if(!pointer2) {
            mergedPointer.next = pointer1
            break
        }
        
        let curr = null
        if(pointer1.data > pointer2.data) {
            curr = { data: pointer2.data }
            pointer2 = pointer2.next
        } else {
            curr = { data: pointer1.data }
            pointer1 = pointer1.next
        }
        
        if(!merged) {
            merged = curr
            mergedPointer = curr
        } else {
            mergedPointer.next = curr
            mergedPointer = curr
        }
    }

    return merged
}
