---
title: css面试题
icon: page
date: 2023-06-21
category:
  - 前端
tag:
  - 前端
  - css
  - 基础系列
sticky: true
star: true

---

<!-- more -->



### 1. 盒模型

#### 1.1 标准盒模型

W3C标准：`content`（内容宽度）+  `margin`（左右）+  `padding`（左右）+  `border`（左右）

#### 1.2 怪异盒模型

IE标准：`width`（ `padding` + `border`）+ `margin`（左右）

### 2. 选择器

#### 2.1 选择器

- id 选择器（`#id`）
- 类选择器（`.class`）
- 标签选择器（`div`、`p`、`span`）
- 相邻选择器（`h1+p`：紧贴在`h1`后面的第一个`p`标签。同级标签之间不能有其他标签）
- 子代选择器（`ul>li`）
- 后代选择器（`li a`）
- 通配符选择器（`*`）
- 属性选择器（`a[rel = "external"]`）
- 伪类选择器（`a:hover`、`li:nth-child`）

#### 2.2 优先级算法

- 行内 > 内嵌 > 外部
- `important` 最高

#### 2.3 新增伪类

- `::before`：在元素之前添加内容，清除浮动
- `::after`：在元素之后添加内容
- `:enabled` / `:disabled`：控制表单控件的禁用状态
- `:checked`：单选框或复选框被选中

### 3. 回流、重绘

#### 3.1 回流

当 `render tree` 的一部分或者全部因素因改变了自身的宽高，布局，显示和隐藏或元素内部的文字结构发生变化，导致需要==重新构建页面==的时候，回流就产生了

#### 3.2 重绘

当一个元素自身的宽高，布局，及显示或隐藏没有改变，而只是改变了元素的==外观风格==，就产生了重绘

**结论**：**回流必定出发重绘，重绘不一定触发回流**

- `display:none`：不占空间、不能点击（**回流 + 重绘**）
- `visibility:hidden`：占据空间、不可点击（**重绘**）
- `opacity:0`：占据空间、可以点击（重建图层，性能比较高）

### 4. 定位

- `position`：规定元素的定位类型
- `display`：规定元素应该生成框的类型
- `float`：布局方式，定义元素在哪个方向移动

#### 4.1 优先级

`position: absolute/fixed` > `float`

| 值         |  是否拓标占有位置  | 描述                                   |
| :--------- | :----------------: | -------------------------------------- |
| `static`   |  不脱标，正常模式  | 默认定位方式（没有定位）               |
| `relative` |  不脱标，占有位置  | 相对其原文档流的位置进行定位           |
| `absolute` | 完全脱标，不占位置 | 绝对定位，相对于上一个已经定位的父元素 |
| `fixed`    | 完全脱标，不占位置 | 固定的定位，当对于浏览器窗口进行定位   |
| `inherit`  |                    | 从父元素继承`position`属性的值         |

### 5. 弹性布局（flex）

[flex详细布局](https://zhuanlan.zhihu.com/p/25303493)

#### 5.1 容器属性

```css
/* 主轴方向：水平排列 | 水平反向 | 垂直排列 | 垂直反向排列 */
flex-direction: row | row-reverse | column | column-reverse

/* 换行：不换行 | 换行 | 反向换行（第一行在最后面） */
flex-warp: nowrap | warp | warp-reverse

/* 主轴对齐方式：起点对齐 | 终点对齐 | 居中对齐 | 两端对齐 | 分散对齐 */
justify-content: flex-start | flex-end | center | space-between | space-around

/* 交叉轴对齐方式：拉伸对齐 | 起点 | 终点 | 居中 | 第一行文字的基线对齐 */
align-items: stretch | flex-start | flex-end | center | baseline

/* 多跟轴线对齐方式：拉伸对齐 | 起点 | 终点 | 居中 | 两端对齐 | 分散对齐 */
align-content: stretch | flex-start | flex-end | center | space-between | space-around
```

#### 5.2 项目属性

```css
/* 项目的排列顺序，数值越小越靠前，默认为 0 */
order:0 | 1 | 2 | 3 | -1 | -2 | ...

/* 允许单个项目有与其他项目不一样的对齐方式 */
align-self：auto | flex-start | flex-end | center | baseline | stretch
```

### 6. grid布局

[grid详细布局](https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

#### 6.1 容器和项目

- 最外层的 `div` 为容器，内层的 `div` 为项目
- 项目只能是容器的顶层子元素，不包含项目的子元素
- `grid` 布局只对项目生效

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

#### 6.2 属性

- `display:grid`：指定一个容器采用网格布局
- `grid-template-columns / grid-template-rows`：定义每一列的列宽 / 行高
  - `repeat(重复次数，重复的值)`
    - `auto-fill`：自动填充。有时单元格大小是固定的，但是容器大小不确定，如果希望每一行/列 容纳尽可能多的单元格，可以采用自动填充
  - `fr`：比例，倍数关系
- `grid-row-gap / grid-cloumn-gap`：行间距 / 列间距

```css
.container{
  display:grid;
  grid-template-columns:100px 100px 100px;
  grid-template-rows:100px 100px 100px;
}
grid-template-columns:repeat(3, 100px); 
grid-template-columns:repeat(auto-fill, 100px); // 自动填充
grid-template-columns:150px 1fr 2fr;  // 第三列宽度是第二列宽度的2倍
grid-template-columns:150px auto 150px;  // 自己决定长度
```



- `justify-self`：设置单元格内容水平位置
- `align-self`：设置单元格内容垂直位置

```css
justify-self: start | end | center | stretch
align-self:  start | end | center | stretch
/*
* stretch：拉伸，占满单元格的整个宽度|高度（默认）
*/
```



### 7. px/em/rem/vw/vh

::: info 参考答案

`px`：绝对单位，网页按照==精确像素==来显示

`em`：相对长度单位，相对==自身定义的 `font-size` 来计算，会继承父元素的字体大小==，父元素没有设置则为浏览器的默认字体尺寸（ `1em = 16px` ）

`rem`：相对单位，相对==根元素 `html` ==的字体大小来计算，不会像 `em` 一样使用级联的方式来计算尺寸

`vw/vh`：相对==视口大小布局==，把屏幕平分为100等份

:::

`em` 简化  `font-size` 转化：

```css
html{
  font-size: 62.5%
}
/*
 * 使 `em` 的值变为 `16px * 62.5% = 10px`
 * 则：12px = 1.2em
*/
```



### 8. 文本垂直居中

#### 8.1 单行文本

```css
height:40px
line-henght:40px  // 行高 === 高
```

#### 8.2 多行文本

父容器 `table`，子容器 `table-cell + vertical-align:middle`

```html
<html>
	<div>
    <span>xxxx</span>
  </div>
</html>

<style>
  div{
    width:300px;
    hejgth:200px;
    display:table;
    bacground:red
  }
  span{
    display:table-cell;
    virtical-align:middle;
  }
</style>
```

### 9. 元素水平垂直居中

#### 9.1 flex布局

- 只设置父元素

  ```css
  .parent{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  ```

- 同时设置父子元素

  ```css
  .parent{
    display:flex;
  }
  .child{
    align-self:center;
    margin:auto;
  }
  ```

#### 9.2 absolute+margin

```css
.parent{
  position:relative;
}
.child{
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto;
}
```

#### 9.3 absolute+transform

```css
.parent{
  position:relative;
}
.child{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
```

#### 9.4 grid

```css
.parent{
  display: grid;
}
.child{
  align-self:center;
  justify-self:center
}
```

####  9.5 absolute+负margin

```css
.parent{
  position:relative;
}
.child{
  width: 200px;
  height: 200px;
  position:absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
}
```

### 10. BFC

块级格式化上下文

- 同一个 `BFC` 内的两个相邻的盒子会发生 ==`margin`重叠==
- `BFC` 区域不会和 `float` 元素重叠
- `BFC` 计算高度，浮动子元素也参与
- `BFC` 就是页面上的一个隔离的独立容器，容器里面的元素==不会影响到外面的元素==

触发属性：

```css
float:left | right
overflow: auto | scroll | hidden
display: inline-block | flex | grid 
position: absolute | fixed
```

**作用：**

- 清除元素内部浮动
- 解决盒子 margin 合并问题

### 11. 文本溢出

```css
white-space: nowarp;      // 文字强制不换行
overflow: hidden;         // 溢出文字隐藏
text-overflow: ellipsis;  // 文字溢出换省略号
```



### 12. sass\scss\less

#### 12.1 less

- 能够使用 `javscript` 函数来创建动态的CSS值
- 支持嵌套规则、混合和变量 ，  变量使用@符号
- 通过编译成CSS后引用CSS

```less
@primary-color: #007bff;

.button{
  background-color: @primary-color;
  color:white;
}

.box{
  .button;
  border: 1px solid @primary-color;
}
```

#### 12.2 sass

- 预处理器，可以编译为CSS，并为CSS增加额外的功能，例如变量、混合、嵌套
- 没有大括号{}，变量使用 $ 符号

```css
$primary-color: #007bff;
.button
	background-color: $primary-color
	color: white

.box
	@include button
  border: 1px solid $primary-color
```

#### 12.3 scss

- 与编译器，语法与CSS相似
- 变量：