import { TreeNode } from '../index'

function levelOrder(root: TreeNode | null): number[][] {
  // 深度优先
  // const res: number[][] = [];
  // const  run = (node: TreeNode | null, depth: number) => {
  //   if (!node) return;
  //   if (res[depth]) {
  //     res[depth].push(node.val);
  //   } else {
  //     res[depth] = [node.val];
  //   }

  //   run(node.left, depth + 1);
  //   run(node.right, depth + 1);
  // }
  // run(root, 0);
  // return res;

  // 广度优先
  let res: number[][] = [];
  let queue: TreeNode[] = [];
  
  if (root) queue.push(root);
  while (queue.length) {
    const size = queue.length;
    const levelArr: number[] = [];
    for (let i: number = 0; i < size; i++) {
      const node: TreeNode = queue.shift() as TreeNode;
      levelArr.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(levelArr);
  }

  return res;
}
