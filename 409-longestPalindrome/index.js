function longestPalindrome(s) {
  let map = new Map()
  let res = 0
  for (let i = 0, len = s.length; i < len; i++) {
    if (map.has(s[i])) {
      res += 2
      map.delete(s[i])
    } else {
      map.set(s[i], 1)
    }
  }
  return map.size ? ++res : res
}

const num = longestPalindrome('12323125434')
console.log('num-', num)
