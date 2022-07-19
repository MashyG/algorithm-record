function runningSum(nums: number[]): number[] {
  return nums.map((item, i) => {
    if (!i) return item
    return (nums[i] = nums[i - 1] + item)
  })
}
