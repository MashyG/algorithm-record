
(题解)[https://leetcode.cn/problems/binary-tree-level-order-traversal/solution/by-so-sir-_-564y/]

1. 深度优先
  - 定义递归函数 traverse
  - 确定终止条件，也就是当前遍历的这个节点是空，就直接 return
  - 确定每一次递归的执行逻辑，定义一个 depth 记录层数，如果当前层数对应的 res 有值就直接 push，没有就添加一个数组进去
  - 向下递归遍历左右节点，直到结束

2. 广度优先
  - 定义一个队列 queue 来存放节点
  - 遍历队列，挨个节点从头部取出
  - 记录取出的节点的数值 val，如果有左右节点再加入队列，供下一次遍历使用
  - 最后队列长度为 0 即遍历结束
