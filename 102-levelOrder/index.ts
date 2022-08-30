import { TreeNode } from '../index'

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
