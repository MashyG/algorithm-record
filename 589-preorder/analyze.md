
# 递归

> 思路：需要一个数组 result 去存储递归遍历 N 叉树节点的值用于返回最终结果；<br>
递归方法为遍历 N 叉树，只要当前节点不为空时，将当前节点的值放入 result 中；当当前节点有 children 时，再次进入递归方法中

```ts
// 递归方法
function run(root, res) {
  if (root === null) {
    return []
  }
  res.push(root.val)
  for (const el of root.children) {
    run(el, res)
  }
}
```
