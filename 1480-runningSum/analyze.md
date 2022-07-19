数组「动态和」的计算公式：`runningSum[i] = sum(nums[0]…nums[i])`

```ts
const arr = [1,2,3,4]
const sum = [
  arr[0],
  arr[0] + arr[1]
  arr[0] + arr[1] + arr[2],
  arr[0] + arr[1] + arr[2] + arr[3]
]
// 由此可以发现 sum 数组有很多相同项
sum[0] = arr[0]
sum[1] = arr[0] + arr[1] = sum[0] + arr[1]
sum[2] = arr[0] + arr[1] + arr[2] = sum[1] + arr[2]
sum[3] = arr[0] + arr[1] + arr[2] + arr[3] = sum[2] + arr[3]
// 通过抽取出相同项后可发现规律，除了第一项等于自己外，每一项的和都是前一项和 + 当前项
const runningSumArr = arr.map((item, i) => {
  if (!i) return item // 第一项返回自己
  return (arr[i] = arr[i - 1] + item)
})
```
