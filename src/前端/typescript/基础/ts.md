---
title: TypeScript 基础系列
icon: page
date: 2020-01-01
category:
  - 前端
tag:
  - 前端
  - TypeScript
sticky: true
star: true
---

<!-- more -->

### 1. 基本类型

#### 1.1 布尔值

#### 1.2 数字

#### 1.3 字符串

#### 1.4 数组

- number[]
- Array

#### 1.5.元组Tuple

​	允许一个已知元素数量和类型的数组，个元素的类型不必相同

```typescript
let x : [string,number]
x = ['hi',10]
```

#### 1.6 枚举

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green
```

#### 1.7 Any

- 不清楚类型变量时：`let notSure: any = 4`
- 只知道一部分数据类型时：`let list:any[] = [1, true, "hi"]`

#### 1.8 Void

​   没有任何类型，函数没有返回值

#### 1.9 Undefined和Null

#### 1.10 Never

- 抛出异常

- 不会有返回值的函数表达式
- 箭头函数表达式的返回值类型

#### 1.11 Object

### 2. 类型断言

- “尖括号”语法：<类型>变量名

  ```typescript
  let value: any = "this is string"
  let length: number = (<string>value).length
  ```

- as语法： 变量名  as  类型

  ```typescript
  let value: any = "this is string"
  let length: number = (value as string).length
  ```

### 3. 类型索引

```typescript
//使用extends关键字实现泛型约束
interface Sizeable{
    size: number
}
function trace<T extends Sizeable>(arg: T): T{
    return arg
}

//索引类型 使用 keyof T 把传入的对象属性类型取出生成一个联合类型
//keyof T   索引类型查询的结果为 T上已知的公共属性名的来联合
function getValue<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key]
}
```

### 4. type类型别名

1. 可以创建联合类型、元组类型、基本类型（string , number , symbol）
2. 可以利用type和映射类型快速创建类型
3. 可以封装一个快速生成接口类型的函数类型


### 5. keyof 关键字

检查键是否存在 获取某种类型的所有键 返回联合类型

接收一个对象类型作为参数，并返回该对象的所有key值组成的联合类型

```typescript
interface IProps {
    name: string,
    age: number,
    sex: string
}
// Keys 类型为'name'|'age'|'sex' 组成的联合类型
type Keys = keyof IProps
```

```typescript
//函数接受两个泛型参数
//T 代表object的类型，同时T需要满足约束一个对象
//K 代表第二个参数K的类型，同时K需要满足约束keyof T
//ketof T 代表object中所有key组成的联合类型
function getValueFromKey<T extends object,K extends keyof T>(obj: T, key: K){
    return obj[key]
}
```


### 6. typeof操作符

用于获取变量的类型，typeof 变量

```typescript
const p = {
    name: 'a',
    age: 18
}
type Person = typeof p;
//等同于
type Person = {
    name: string;
    age: number;
}
```



### 7. infer 占位

#### 1.`infer` 解包

```typescript
type Ids = number[]
type Names = string[]

// 不使用 infer
type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T

//// 使用 infer
type Unpacked<T> = T extends (infer R)[] ? R : T

type idType = Unpacked<Ids>      // 类型为 number
type nameType = Unpacked<Names>  // 类型为 string

```



`T extends (infer R)[] ? R : T` ：如果 T 是一个待推断类型的数组，则返回推断的类型，否则返回 T

```typescript
// 想要获取一个 promise<xxx> 类型中的 xxx 类型
type Response = Promise<number[]>
type Unpacked<T> = T extends Promise<infer R> ? R : T

type resType = Unpacked<Response>   // resType 的类型为 number[]
```



#### 2.`infer` 推断联合类型

同一个类型变量在推断的值有多种情况的时候会推断为联合类型

```typescript
type Foo<T> = T extends {a: infer U; b: infer U} ? U : never

type T1 = Foo<{a: string, b: string}>   // T1 类型为 string
type T2 = Foo<{a: string, b: number}>   // T1 类型为 string | number
```

​	

```typescript
// 通过元组的形式
type Foo<T> = T extends (infer R)[] ? R : never

type T1 = [string, number]
type Union = Foo<T1>  //Union 类型为 string | number
```



#### 3.`infer` 推断交叉类型

**在逆变位置上，同一类型变量的多个候选类型将会被推断为交叉类型。**

```typescript
type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never
type T1 = Bar<{ a: (x: string) => void; b: (x: number) => void}>  
// string & number 
```

#### 4.嵌套 复杂

```typescript
type Ref<T = any> = {
	value: T
}

type UnwarpRef<T> = {
    ref: T extends Ref<infer R> ? R : T
    object: { [K in keyof T]: UnwarpRef<T[K]> }
    other: T
}[
	T extends Ref
	? 'ref'
	: T extends object
		? 'object'
		: 'other'
]

function ref<T>(value: T): T extends Ref ? T : Ref<UnwarpRef<T>>

const count = ref({
    foo: ref('1'),
    bar: ref(2)
})

count.value.foo // string
```



### 8. 接口

#### 1.属性

    1.1可选属性

```typescript
interface SquareConfig {
	color?: string;
    width?: number;
}
function createSquare(config: SquareConfig):{color:string;area:number}{
    ...
}
let mySquare = createSquare({color:"black"})
```

​	1.2 只读属性

```typescript
interface Point {
    readonly x:number
}

// readonly: 作为属性使用
// const: 作为变量使用
```

#### 2.函数类型 

​	字符串和数字

```typescript
interface SearchFunc {
    (source : string, subs : string) : boolean
}

let mySearch : SearchFunc;
mySearch = function(sourch: string, subs: string){
    let source.search(subs) > -1
}

//未指定类型，
//因为函数直接赋值给了SearchFunc类型变量，所以会推断出参数类型
//函数返回值类型通过其返回值推断出来
mySearch = function(sourch, subs){
    let source.search(subs) > -1
}
```

#### 3.可索引的类型

```typescript
interface StringArray{
	[index: number]: string
}
```

#### 4.类类型

```typescript
interface xxx{
    current : Date
}
class Clock implements xxx{
	...
}
```

#### 5.继承接口

```typescript
interface Shape{
    color: string;
}
interface PenStroke{
    width: number;
}
interface Square extends Shape{
    length: number
}

//多继承
interface Square extends Shape,PenStroke{
    length: number
}
let square = <Square>{}
square.color = "red"
square.length = 10
```



### 9. 泛型

 	1. 定义：对类型编程，定义函数、接口或者类时，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性
 	2. 使用方式：就是在标志符后面添加尖括号（<>），然后在<>里写形参，并在 body（函数体， 接口体或类体） 里用这些形参做一些逻辑处理。
 	3. 接收什么类型的参数 ，返回什么类型的参数



#### 1.泛型约束

**写法：< 泛型变量 extends 接口 > **

约束泛型所需要满足的格式

```typescript
interface IHasLength{
    length: number
}

function getLength<T extends IHasLength>(arg: T){
    return arg.length
}
```



#### 2.函数泛型

```typescript
function returnItem<T>(para: T): T{
    return para
}
//一次定义多个参数
function retunItem<T, U>(para: [T, U]):[T, U]{
	return [para[1],para[0]]
}
retunItem([1, "seven"])
```

#### 3.接口泛型

```typescript
interface ReturnItem<T> {
    (para: T) : T
}
const returnItem: ReturnItem<number> = para=> para
```

#### 4.类泛型

```typescript
class Stack<T> {
    private arr: T[] = []
    
    public push(item:T){
		this.arr.push(item)
    }
    
    public pop(){
        this.arr.pop()
    }
}

const stack = new Stack<number>()

class MyComponent extends React.Component<Props, State>{

}
```

#### 5.内置泛型

###### `Partial<T>`

创造一个新的类型，并将实际类型参数T中所有属性变为 可选属性。

```typescript
interface A {
    name: string;
    a: number;
}
type A1 = Partial<A>
//相当于下面格式，此时A1的类型为
type A1 = {
    name?: string | undefined;
    a?: number | undefined;
}
```

###### `Required<T>` 

创造一个新的类型，并将实际类型参数T中所有属性变为必选属性。

```typescript
interface A {
    name?: string;
    a: number;
}
type A1 = Required<A>
//相当于下面格式，此时A1的类型为
type A1 = {
    name: string;
    a: number;
}
```

###### `Record<T,U>` 

创建一个新的对象，实际类型参数T为联合类型将作为新对象类型的属性，类型参数U为对象类型属性的类型。

```typescript
type A = 'a' | 'b'
type B = string
type A1 = Record<A,B>
//等价为
type A1 = {
    a: string;
    b: string;
}
```

###### `Pick<T,U>` 

挑选出对象类型T中U对应的属性和类型，以此创建一个新的对象类型

```typescript
interface Vue {
	version: string
    component(): object
}
type A1 = Pick<Vue,'component'>
//等价为
type A1 = {
    component:() => object; 
}
```

###### `Omit<T,U>` 

与Pick相反，挑选对象类型T中不在U中的属性和类型

```typescript
interface Vue {
	version: string
    component(): object
}
type A1 = Omit<Vue,'component'>
//等价为
type A1 = {
    version: string; 
}
```

###### `Exclude<T,U>` 

从类型T中剔除所有可以赋值给类型U的类型

```typescript
type A = 'a' | 'b' | 'c'
type B = 'a'
type A1 = Exclude<A,B>
//等价为
type A1 = 'b' | 'c'

type C = string
type A2 = Exclude<A,C>
//等价为
type A2 = never

```

###### `Extract<T,U>` 

与Exclude相反

```typescript
type A = 'a' | 'b' | 'c'
type B = 'a'
type A1 = Extract<A,B>
//等价为
type A1 = 'a'
```



###### `ReturnType<T>`

获取函数返回值类型

```typescript
function f1(s: string){
    return { a: 1, b: s }
}

type t1 = ReturnType<() => string>           // string
type t2 = ReturnType<(s: string) => void>    // void
type t3 = ReturnType<(<T>() => T)>           // {}
type t4 = ReturnType<(<T extends U, U extends number[]>() => void)>  // number[]
type t5 = ReturnType<typeof f1>     // { a: number,b: string }
type t6 = ReturnType<any>           // any
type t7 = ReturnType<nerver>        // any
type t8 = ReturnType<string>        // Error
type t9 = ReturnType<Function>      // Error
```







### 10. 高级类型

##### 交叉类型

 1. 将多个类型合并成为一个类型  &

 2. 成员类型：

    1. 可以为任意类型

    2. 当成员类型为原始类型的交叉类型时，结果类型为never。

       `type T1 = string & number` =>`never`

 3. 类型成员

    类型成员由各个类型成员的属性成员的并集组成

    属性成员的类型为各个成员类型的交叉类型

 4. 索引签名

    当交叉类型的**成员类型之一**具有数字索引签名或者字符串索引签名时，

    结果类型就包含相应的数字索引签名或者字符串索引签名，

    并且结果类型的索引签名值类型是**各个成员索引签名值类型的交叉类型**

    ```typescript
    // A 和 B 都具有数字索引签名
    // 所以结果类型 T 也具有数字索引签名 
    // 该数字索引签名值类型是 number&string，即 never类型
    interface A {
        [key: number]: number;
    }
    interface B {
        [key: number]: string;
    }
    type T = A & B
    const s: T 
    let a = s[0]  // const a : never
    ```

    

    ```typescript
    // 只有A 具有数字索引签名
    // 所以结果类型T 也具有数字索引签名
    // 该数字索引签名值类型是 number 类型
    interface A {
        [key: number]: number;
    }
    interface B {
        focus():void; 
    }
    type T = A & B
    const s: T 
    let a = s[0]  // const a : number
    ```

 5. 调用签名

    大致和索引签名 一样

 6. 



##### 联合类型

 1. 由两个及以上的成员类型构成 |

 2. 类型成员

    类型成员由各个类型成员的属性成员的交集组成

    属性成员的类型为各个成员类型的联合类型

    ```typescript
    // 类型T上的属性成员 只能是A和B属性成员的交集
    type A = {
        version: string;
        a: number;
    }
    type B = {
        version: string;
        b: number;
    }
    type T = A | B
    const s: T
    s.version
    s.a  //ERROR
    s.b  //ERROR
    ```

 3. 索引签名

    当联合类型的成员类型**同时具有**数字索引或者字符串索引时，结果类型中才包含相应的数字索引签名或者字符串索引签名，结果类型的索引签名值类型是**各个成员类型索引签名值类型的联合类型**

    ```typescript
    // 索引签名 同时为 number类型
    // 所以 结果类型的索引签名值类型为 string | number
    interface A {
        [key: number]: number;
    }
    interface B {
        [key: number]: string;
    }
    type T = A|B
    const s: T
    let a = s[0]  // let a : string | number
    ```

    

    ```typescript
    // 索引签名 分别为 number 和 string 
    // 所以结果类型不具有索引签名
    interface C {
        [key: number]: number;
    }
    interface D {
        [key: string]: string;
    }
    type T = A|B
    const s: T
    let a = s[0]    //ERROR
    let a = s['a']  //ERROR
    ```

    



##### class类

类继承的两种方式：

 	1. extends（继承父类）
 	 - 一个新的接口或者类，从父类或者接口继承所有的属性和方法
 	 - 不可以重写属性，但可以重写方法
 	 - 接口可以继承接口或者类，类只能继承类
 	2. implements（实现接口）
 	 - 实现 一个新的类，从父类或者接口实现所有的属性和方法
 	 - 可以重写属性和方法，包含一些新的功能
 	 - 类可以实现接口或者类，一个类可以实现多个接口
 	 - 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，可以提取出共有的特性，用implements实现

```typescript
// 门(Door) 是一个类，防盗门(SecurityDoor)是一个子类。
// 如果防盗门有一个报警器的功能，我们给防盗门一个报警方法
// 车也有报警功能，就可以考虑把报警器提取出来(Alarm)
// 作为一个接口，防盗门和车都可以去实现
class Door{ 
}

interface Alarm{
    alert(): void;
}

class SecurityDoor extends Door implements Alarm{
	alert(){
		console.log('SecurityDoor Alert')
    }
}

class Car implements Alarm{
    alert(){
		console.log('Car Alert')
    }
}
```



```typescript
//一个类可以实现多个接口
class Alarm(){
    alert(): void;
}

interface Light{
	lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm,Light{
	alert(){
		console.log('Car Alert')
    }
    lightOn(){
		console.log('Car light on')
    }
    lightOff(){
		console.log('Car light off')
    }
}
```



### 11. 协变与逆变

##### 协变

子类型能够赋值给父类型

```typescript
// 子类型比父类型更具体（属性更多）
// Son 是 Name 和 Age 的共有子类型
interface Name{
	name: string;
}
interface Age{
	age: number;
}
interface Son{
    name: string;
    age: number;
}

let t0: Name
let t1; Age
let t2: Son

// 类型不相关 不能进行赋值（不具备父子关系）
t0 = t1 //ERROR

// 子类型可以赋值  协变
t0 = t2 
t1 = t2
```



##### 逆变

父类型可以赋值给子类型，与协变相反

```typescript
let getName: (param: Name) => void
getNmae = (param) =>{
    console.log(param.name)
}

let getSex: (param: Son) => void
getSex = (param) =>{
    console.log(param.sex)
}

// getSex 要求参数是 Son，getName 要求参数是 Name
// 因为 Name 是父类型，当把父类型赋值给子类型时，使用参数都是在父类型范围类
// 所以在子类型来看是安全的
getSex = getName
// 反之，子类型赋值给父类型时，因为子类型会用到age,sex，这超出了父类型的范围
// 所以TS认为这是不安全的
getName = getSex // ERROR
```



### 12. 校验函数

#### 12.1 instanceOf 



校验值是否属于某一类型

```typescript
class User{...}
{
    user: instanceOf(User)
    title: instanceOf(string)
}
```



##### oneOf

oneOf 值必须为指定范围内的任意值

```typescript
{
	type: oneOf<'success' | 'fail'>(['success' | 'fail'])
    //等价为
    type: onOf<'success', 'fail'>(['success' | 'fail'])
}
```



##### oneOfType

oneOfType 值必须为指定范围内的任意定义

```typescript
{
  //oneOfType 降校验传入的值，是否在指定类型内，且可以与类型定义函数组合使用
  data: oneOfType([string(), Number, Object<user>() ])
}
//注意：oneOfType 内部接收的是类型，类型定义的公共函数是无效的
{
  key: oneOfType([ string().def('defKey'), number()]).isRequired
  //这里 string().def('defKey') 是无效的，并不能屏蔽 isRequired
}
```



##### arrayOf

指定数组类型校验

```typescript
{
    //单一类型
	keys: arrayOf(String),
    //联合类型
    //string[] | number[]
    keys: arrayOf(oneOfType([string(), number()])) 
}
```



##### objectOf

对象属性值校验

```typescript
{
    maps: ObjectOf(string()).def({source: 'xx'})
	maps: ObjectOf(string()).def({source: 00}) //ERROR
}
//可以与 oneOfType 一起使用
{
	keys: ObjectOf(oneOfType([string(),number()])).def({a:'k',b:10})
}
```



##### shape

定义对象的具体结构

```typescript
interface User{
    name: string,
    age: number
}
{
	user: shap<User>({
        name: string(),
        age: number()
    })
}
```



##### custom

自定义校验函数
