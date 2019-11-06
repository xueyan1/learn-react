/**
 *  redux 状态管理
*/
import { createStore } from 'redux'
export default function () {
    //第一步定义计算规则
    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCRE':
                return state + 1
            case 'DECRE':
                return state - 1
            default:
                return state
        }
    }
    //第二步 根据规则生成store
    let store = createStore(counter)
    //第三步 定义数据变化子后的派发规则
    store.subscribe(() => {
        console.log('fn1 ->', store.getState());
    })
    // 第四步 触发数据变化
    store.dispatch({ type: 'INCRE' })
    store.dispatch({ type: 'DECRE' })
}
