
# 迭代

> 注意: 当要切换下一个节点时，必须要保存好当前节点，否则会丢失下一个节点的引用！！！

```js
// 分析过程
// [1,2,3,4]
// h: 初始链表，t: 储存下一节点，p: 返回的链表
// 第一轮
// t: 2   => 2                      => 2
// h: 1   => 1 -> 0                 => 2
// p: 0   => 1 -> 0                 => 1 -> 0

// 第二轮
// t: 2   => 3                      => 3
// h: 2   => 2 -> 1 -> 0            => 3
// p: 0   => 2 -> 1 -> 0            => 2 -> 1 -> 0

// 第三轮
// t: 3   => 4                      => 4
// h: 3   => 3 -> 2 -> 1 -> 0       => 4
// p: 0   => 3 -> 2 -> 1 -> 0       => 3 -> 2 -> 1 -> 0

// 第四轮
// t: 4   => 0                      => 0
// h: 4   => 4 -> 3 -> 2 -> 1 -> 0  => 0
// p: 0   => 4 -> 3 -> 2 -> 1 -> 0  => 4 -> 3 -> 2 -> 1 -> 0

```

```ts
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
```
