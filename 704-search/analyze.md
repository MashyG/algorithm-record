
# 二分查找

1. 获取数组的中间值
2. 比较中间值与目标值的大小
   1. 若中间值 **大于** 目标值，说明目标值位于中间值的 **左侧**
   2. 若中间值 **小于** 目标值时，说明目标值位于中间值的 **右侧**
   3. 否则，中间值 **等于** 目标值时，说明 **目标值就是中间值**

```ts
// 递归方法
function secondOfSearch(
  arr: number[],
  left: number,
  right: number,
  target: number
): number {
  if (left > right) return -1
  // 1
  const middle: number = Math.floor((left + right) / 2)
  const value = arr[middle]
  if (value > target) { // 2-1
    return secondOfSearch(arr, left, middle - 1, target)
  } else if (value < target) { // 2-2
    return secondOfSearch(arr, middle + 1, right, target)
  } else { // 2-3
    return middle
  }
}

function searchFunc(nums: number[], target: number): number {
  const { length } = nums || []
  if (length < 1) return -1
  return secondOfSearch(nums, 0, length - 1, target)
}
```
