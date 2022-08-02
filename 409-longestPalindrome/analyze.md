
# 哈希

> 思路：定义一个哈希 Map，用于存放字符出现的次数；遍历字符串时，若存在相应的字符，则返回结果加2，且移除哈希中的当前字符；否则将字符添加到哈希Map中，并赋值为 1；最后判断一下哈希map还有没有值，如果有，则返回结果加1。<br><br>
> 其中<br>
> 1. 返回结果加2的原因是：因为后面会把存在字符的哈希值移除，所以如果存在相应字符时，此时该字符必定出现2次，因此加2<br>
> 2. 返回结果加1的原因是：存在最后一个奇数的字符

```ts
// 'abccccdd'
// hash: {a: 1}
// res: 0

// hash: {a: 1, b: 1}
// res: 0

// hash: {a: 1, b: 1, c: 1}
// res: 0

// hash: {a: 1, b: 1}
// res: 2

// hash: {a: 1, b: 1, c: 1}
// res: 2

// hash: {a: 1, b: 1}
// res: 4

// hash: {a: 1, b: 1, d: 1}
// res: 4

// hash: {a: 1, b: 1}
// res: 6

// hash: {a: 1, b: 1}
// res: 7(6 + 1)
```

```ts
let map = new Map()
let res: number = 0
for (let i = 0, len = s.length; i < len; i++) {
  if (map.has(s[i])) {
    res += 2
    map.delete(s[i])
  } else {
    map.set(s[i], 1)
  }
}
return map.size ? ++res : res
```
