
# 哈希

> 一个非常直观的思路是：我们遍历链表中的每个节点，并将它记录下来；一旦遇到了此前遍历过的节点，就可以判定链表中存在环

```ts
const hashSet = new Set()
while (head !== null) {
  if (hashSet.has(head)) {
    return head
  }
  hashSet.add(head)
  head = head.next
}
return null
```

# 快慢指针

> 我们使用两个指针，fast 与 slow。它们起始都位于链表的头部。随后，slow 指针每次向后移动一个位置，而 fast 指针向后移动两个位置。如果链表中存在环，则 fast 指针最终将再次与 slow 指针在环中相遇

> 因此，任意时刻，fast 指针走过的距离都为 slow 指针的 2倍

```js
// 分析过程
// [1]
// fast.next === null 返回 null

// [1,2,1] 0
// slow: 1 -> 2 -> 1
// fast: 1 -> 1 -> 1
// ptr 和 slow 随之移动后会在索引 0 处相同即返回 ptr

// [3,2,0,-4,2] 1
// slow: 3 -> 2 -> 0
// fast: 3 -> 0 -> 0
// ptr 和 slow 随之移动后会在索引 1 处相同即返回 ptr

// [1,2,3,4,5,6,7,3] 2
// slow: 1 -> 2 -> 3 -> 4 -> 5 -> 6
// fast: 1 -> 3 -> 5 -> 7 -> 4 -> 6
// ptr 和 slow 随之移动后会在索引 2 处相同即返回 ptr
```

```ts
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
  // 当发现 slow 与 fast 相遇时，我们再额外使用一个指针 ptr
  // ptr 起始指向链表头部，随后，它和 slow 每次向后移动一个位置
  // 最终，它们会在入环点相遇。
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
```
