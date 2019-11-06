import React, { useState ,useEffect,useDebugValue} from 'react'
/**
 * Hook是一些可以让你在函数组件里‘钩入’React state 及生命周期等特性的函数
 * 不能在class组件中使用
 *
 */
function HookDemo () {
  //useState 会返回一对值：
  // 当前状态和一个让你更新它的函数，
  // 你可以在事件处理函数中或其他一些地方调用这个函数。
  // 它类似 class 组件的 this.setState，但是它不会把新的
  // state 和旧的 state 进行合并。
  // useState 唯一的参数就是初始 state。所以0 就是初始state就是0
  //只在初次渲染的时候用到
  const [count, setCount] = useState(0)

  //相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `点击${count}次数！`
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default HookDemo


//hook 函数：1.useState,2 useEffect
