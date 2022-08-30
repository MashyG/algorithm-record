function secondSearch(arr, left, right, target) {
  if (left > right) return -1
  const mid = Math.floor((left + right) / 2)
  const tpl = arr[mid]
  if (tpl > target) {
    return secondSearch(arr, left, mid - 1, target)
  } else if (tpl < target) {
    return secondSearch(arr, mid + 1, right, target)
  } else {
    return mid
  }
}

function search(arr, target) {
  const { length } = arr || []
  if (length < 1) return -1
  return secondSearch(arr, 0, length - 1, target)
}

const index = search([1, 2, 6, 9], 6)
console.log(index)
