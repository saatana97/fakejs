# fakejs

世间万物如梦一场

# Installation

```
npm install --save @saatana97/fakejs
```

## number

### 生成范围内随机整数，包含最小值和最大值，参数不固定顺序

-   min:number 最小值

-   max:number 最大值

---

-   number

```
number(0,100)
// 50
```

## index

### 生成数组的随机下标顺序

-   arr:unknown[] 数组

---

-   number

```
index(['','',''])
// 1
```

## item

### 抽取数组的随机元素

-   arr:T[] 数组

---

-   T

```
item([1,2,3])
// 1
```

## word

### 生成指定长度随机字符串

-   ## config?:Object 可选配置

    -   length?:number = 1 字符串长度
    -   number?:boolean = false 是否包含数字
    -   lower?:boolean = true 是否包含小写字母
    -   power?:boolean = true 是否包含大写字母
    -   repeatable?:boolean = true 是否允许出现重复字符 <b>【字符串长度不能超过可选字符数量，否则不生效】</b>
    -   ext?:string[] = [] 扩展可选字符数组

---

-   string

```
ward({length : 10})
// hQfRloQmaA
```

## chinese

### 生成随机中文

-   \-

---

-   T

```
chinese()
// 可
```

## nickname

### 生成随机中文姓名

-   \-

---

-   T

```
nickname()
// 向文可
```
