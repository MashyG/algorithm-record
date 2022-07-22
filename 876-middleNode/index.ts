import { ListNode } from '../index'
function middleNode(head: ListNode | null): ListNode | null {
  // 数组
  // let listNode: ListNode[] = []
  // while (head !== null) {
  //   listNode.push(head)
  //   head = head.next
  // }
  // const { length } = listNode || []
  // const middleLength = Math.trunc(length / 2)
  // return listNode[middleLength]
  // 单指针
  // if (head === null) return null
  // let n = 0,
  //   cur: ListNode | null = head
  // while (cur !== null) {
  //   ++n
  //   cur = cur.next
  // }
  // let k = 0
  // cur = head
  // while (k < Math.trunc(n / 2)) {
  //   ++k
  //   cur = cur.next
  // }
  // return cur
  // 快慢指针
  let slow = head as ListNode
  let fast = head as ListNode
  while (fast && fast.next) {
    slow = slow.next as ListNode
    fast = fast.next.next as ListNode
  }
  return slow
}
