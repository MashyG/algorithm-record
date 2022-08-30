
# 深度优先

- 定义递归函数 traverse
- **确定终止条件**，也就是当前遍历的这个节点是空，就直接 return
- 确定每一次递归的执行逻辑，定义一个 depth 记录层数，如果当前层数对应的 res 有值就直接 push，没有就添加一个数组进去
- 向下递归遍历左右节点，直到结束

```ts
function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const traverse = (node: TreeNode | null, depth: number) => {
    if (!node) return;
    if (res[depth]) {
      res[depth].push(node.val);
    } else {
      res[depth] = [node.val];
    }

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
  traverse(root, 0);
  return res;
}
```

# 广度优先

- 定义一个队列 queue 来存放节点
- 遍历队列，从头部取出每个节点
- 记录取出的节点的数值 val，如果有左右节点再加入队列，供下一次遍历使用
- **最后队列长度为 0 即遍历结束**

```ts
function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []
  let queue: TreeNode[] = []

  if (root) queue.push(root)
  while (queue.length) {
    const size = queue.length
    const levelArr: number[] = []
    for (let i: number = 0; i < size; i++) {
      const node: TreeNode = queue.shift() as TreeNode
      levelArr.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    res.push(levelArr)
  }

  return res
}
```
