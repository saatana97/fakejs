# fakejs

世间万物如梦一场

# Installation

```
npm install --save @saatana97/fakejs;
```

# Use

### 全量引用

```
import * as fakejs from '@saatana97/fakejs';
fakejs.nickname();
```

### 按需引用

```
import { nickname } from '@saatana97/fakejs';
nickname();
```

## number

### 生成范围内随机整数，包含最小值和最大值，参数不固定顺序

-   min:number 最小值

-   max:number 最大值

---

-   number 随机整数

```
number(0,100);
// 50
```

## index

### 生成数组的随机下标顺序

-   arr:unknown[] 数组

---

-   number 随机下标

```
index(['','','']);
// 1
```

## item

### 抽取数组的随机元素

-   arr:T[] 数组

---

-   T 随机元素

```
item([1,2,3]);
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

-   string 随机字符串

```
ward({length : 10});
// hQfRloQmaA
```

## chinese

### 生成随机中文

-   \-

---

-   string 随机中文

```
chinese();
// 可
```

## nickname

### 生成随机中文姓名

-   \-

---

-   string 随机中文姓名

```
nickname();
// 向文可
```

## image

### 生成指定尺寸随机颜色图片，目前仅支持浏览器环境

-   width:number 宽度，默认 100
-   height:number 高度，默认 100
-   color:string 颜色

---

-   string 随机图片数据

```
image();
// 图片base64内容
```

## sex

### 生成随机性别

#### T: string | number | { label:string; value:number }

#### enum SexMode: LABEL=0，VALUE=1, OBJECT=2

-   mode:SexMode 模式，默认为 SexMode.LABEL
-   ext:T[] 扩展性别

---

-   T 随机性别

```
sex(enums.SexMode.VALUE);
// 1
```

### 生成随机手机号码

-   segment:string 固定号段

---

-   string 随机手机号码

```
phone('132');
// 13202090601
```
