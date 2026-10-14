## Relative prime

要用 Python prove（證明）兩個 integers 係 relatively prime（互質），最重要係檢查佢哋嘅 GCD（Greatest Common Divisor，最大公因數）係咪等於 1。

### 方法一：用你之前學嘅 GCD 程式

兩個整數 `n1` 同 `n2` 如果：

`gcd(n1,n2)=1`

就代表佢哋係 relatively prime。

```py
n1 = 12
n2 = 25
gcd = 1
k = 2
while k <= n1 and k <= n2:
  if n1 % k == 0 and n2 % k == 0:
    gcd = k
  k += 1

if gcd == 1:
  print("Relatively prime")
else:
  print("Not relatively prime")
```

輸出：

```
Relatively prime
```

因為 12 同 25 嘅最大公因數係 1。

### 方法二：用 Python 內置 `math.gcd()`

呢個方法最簡潔：

```
import mathn1 = 12n2 = 25if math.gcd(n1, n2) == 1:    print("Relatively prime")else:    print("Not relatively prime")
```

### 點樣判斷？

| 兩個整數   | GCD | 結果                   |
| ------ | --- | -------------------- |
| 12, 25 | 1   | Relatively prime     |
| 12, 18 | 6   | Not relatively prime |
| 7, 9   | 1   | Relatively prime     |
| 8, 15  | 1   | Relatively prime     |

記住考試重點：

- `GCD == 1` → **relatively prime**（互質）
- `GCD > 1` → **not relatively prime**（不互質）

兩個數唔需要本身係質數，先可以互質。例如 8 同 15 都唔係質數，但佢哋嘅 GCD 係 1，所以係互質。
