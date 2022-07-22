import { ListNode } from '../index'

function detectCycle(head: ListNode | null): ListNode | null {
  // 哈希
  //   const hashSet = new Set()
  //   while (head !== null) {
  //     if (hashSet.has(head)) {
  //       return head
  //     }
  //     hashSet.add(head)
  //     head = head.next
  //   }
  //   return null

  // 快慢指针
  if (head === null) {
    return null
  }
  let slow = head,
    fast = head
  while (fast !== null) {
    slow = slow.next as ListNode
    if (fast.next !== null) {
      fast = fast.next.next as ListNode
    } else {
      return null
    }
    if (fast === slow) {
      let prev = head
      while (prev !== slow) {
        prev = prev.next as ListNode
        slow = slow.next as ListNode
      }
      return prev
    }
  }
  return null
}
