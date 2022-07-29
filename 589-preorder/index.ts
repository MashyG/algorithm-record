import { Node } from '..'

function run(root, res) {
  if (root === null) {
    return []
  }
  res.push(root.val)
  for (const el of root.children) {
    run(el, res)
  }
}
function preOrder(root: Node | null): number[] {
  const res: number[] = []
  run(root, res)
  return res
}
