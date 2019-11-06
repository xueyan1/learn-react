# 自定义组件的方式

* 第一种：函数式

```js
function Click (props) {
   return <h1>Hello, {props.name}</h1>;
}
```

* 第二种：类（Class）

```js
class Click extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

# 案例 · 自定义一个时钟组件

 * 代码

 ```js
import React from 'react';

class Click extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date:new Date()
    }
  }
  componentDidMount () {
    this.timerID = setInterval(() => this.click(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  click () {
  this.setState({
    date:new Date()
  })
}
  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
export default Click

 ```

* 说明

  + 当 <Clock /> 被传给 ReactDOM.render()的时候，React 会调用 Clock 组件的构造函数。 因为 Clock 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 this.state。我们会在之后更新 state。
  + 之后 React 会调用组件的 render() 方法。这就是　React 确定该在页面上展示什么的方式。然后　React 更新 DOM 来匹配 Clock 渲染的输出。
  + 当 Clock 的输出被插入到 DOM 中后， React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器请求设置一个计时器来每秒调用一次组件的 tick() 方法。
  + 浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于 setState() 的调用，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render() 方法中的 this.state.date 就不一样了，如此以来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
  + 一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。

* 正确地使用state
  + 不要直接修改state。使用setState(),而只有在构造函数才能this.setState赋值
  + State 的更新可能是异步的。
  因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

    ```js
      // Wrong
    this.setState({
    counter: this.state.counter + this.props.increment,
    });
    ```

    要解决这个问题，需要让setState()接收一个函数而不是一个对象。

    ```js
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }))
    ```

  + State的更新会被合并。

    ```js
      componentDidMount() {
        fetchPosts().then(response => {
        this.setState({
          posts: response.posts
       });
      });

    fetchComments().then(response => {
        this.setState({
          comments: response.comments
        });
      });
    }
    ```
    这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。
  + 数据是向下流动的。
      - 任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

# 事件处理

 * 使用小驼峰式

 * 使用jsx 语法时需要传入一个函数作为事件处理函数，而不是字符串。

    ```js
    <button onClick={activateLasers}>
      点击
    </button>
    ```

 * 当你使用 ES6 class 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。
 * 向事件处理程序传递参数

    ```js
    <button onClick={(e) => this.deleteRow(id, e)}>
      Delete Row
    </button>
    <button onClick={this.deleteRow.bind(this, id)}>
      Delete Row
    </button>
    ```

# 条件渲染

 * 在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。
 * 三种渲染模式
   - 元素变量
   - 与运算符 &&
   - 三目运算符
 * 阻止组件渲染。
  可以让 render 方法直接返回 null，而不进行任何渲染。但并不会影响组件的生命周期

    ```js
    function WarningBanner(props) {
      if (!props.warn) {
      eturn null;
    }
    return (
      <div className="warning">
        Warning!
      </div>
      );
    }
    ```

# 列表&key

  * 渲染多个组件
    - map循环渲染
    - key 只有放在就近的数组上下文才有意义。一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性

# 表单 （受控组件）

  * input、textarea、seclet
  * formik的使用

# 状态提升

  - 通常，多个组件需要反映相同的变化数据，此时将共享状态提升到最近的共同父组件中去。
  - up-state 组件和 temperature-input

# 组合 vs 继承
  推荐使用组合而非继承来实现组件间的代码重用
  - 包含关系。通过props 传递。
  - 特例关系。
  - 继承基本上不用。

# React 哲学
  - 将设计好的UI划分为组件层级
  - 用react创建一个静态版本
  - 确定UI state 的最小表示
  - 确定state 放置的位置
  - 添加反向数据流

# Hook

  - Hook是一些可以让你在函数组件里‘钩入’React state 及生命周期等特性的函数,不能在class组件中使用
  - 函数：1.useState,2 useEffect

#### useState

 useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的state 和旧的 state 进行合并。useState 唯一的参数就是初始 state。所以0 就是初始state就是0,只在初次渲染的时候用到

#### useEffect

useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
 - 规则
   + 只在函数最顶层使用hook，不要再循环，条件活着嵌套函数中调用Hook
   + 只在React函数中调用Hook

#### useContext
#### useReducer
#### useMemo
#### useRef
#### useImperativeHandle
#### useLayoutEffect
#### useDebugValue
