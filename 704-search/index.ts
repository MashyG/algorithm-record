function secondOfSearch(
  arr: number[],
  left: number,
  right: number,
  target: number
): number {
  if (left > right) return -1
  const middle: number = Math.floor((left + right) / 2)
  const value = arr[middle]
  if (value > target) {
    return secondOfSearch(arr, left, middle - 1, target)
  } else if (value < target) {
    return secondOfSearch(arr, middle + 1, right, target)
  } else {
    return middle
  }
}

function searchFunc(nums: number[], target: number): number {
  const { length } = nums || []
  if (length < 1) return -1
  return secondOfSearch(nums, 0, length - 1, target)
}
