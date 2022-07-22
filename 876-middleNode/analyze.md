
# 数组

> 遍历链表，并放入数组中，计算数组长度，求得中间数，最后返回该节点即可

```ts
let listNode: ListNode[] = []
while (head !== null) {
  listNode.push(head)
  head = head.next
}
const { length } = listNode || []
const middleLength = Math.trunc(length / 2)
return listNode[middleLength]
```

# 指针

> 遍历两遍链表，第一次遍历记录链表长度，并求出中间数，第二次遍历返回中间数的节点则返回即可

```ts
if (head === null) return null
let n = 0,
  cur: ListNode | null = head
while (cur !== null) {
  ++n
  cur = cur.next
}
let k = 0
cur = head
while (k < Math.trunc(n / 2)) {
  ++k
  cur = cur.next
}
return cur
```

# 快慢指针

> 慢指针走一步，快指针走两步，当快指针不存在或快指针的下一个节点不存在时，则返回慢指针即可

```ts
// 例子 🌰
// [1,2,3,4,5,6]
// slow: 1 -> 2 -> 3 -> 4
// fast: 1 -> 3 -> 5 -> null
// [1,2,3,4,5]
// slow: 1 -> 2 -> 3
// fast: 1 -> 3 -> 5

let slow = head as ListNode
let fast = head as ListNode
while (fast && fast.next) {
  slow = slow.next as ListNode
  fast = fast.next.next as ListNode
}
return slow
```
