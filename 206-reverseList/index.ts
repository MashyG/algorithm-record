import { ListNode } from '../index'

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  while (head !== null) {
    let temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return prev
}
