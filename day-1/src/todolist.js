import React from 'react';
import TodoItem from './todoitem';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'learn react',
                'learn english',
                'learn vue'
            ],
            inputValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }
    //按钮增加事件
    handleBtnClick() {
        let { list, inputValue } = this.state
        if (inputValue) {
            this.setState({
                list: [...list, inputValue],
                inputValue: ''
            })
        } else {
            alert('不得为空')
        }

    }
    //输入框事件
    handleInputChange(e) {
        console.log(e.target)
        this.setState({
            inputValue: e.target.value
        })
    }
    //每个item点击的时候删除
    handleItemClick(index) {
    }
    handleDelete(index) {
        console.log(index)
        let { list } = this.state;
        const l = [...list];
        l.splice(index, 1)
        this.setState({
            list: l
        })
    }

    //获取每个item的数据
    getItem() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        deleteItem={this.handleDelete}
                        key={index}
                        content={item}
                        index={index}
                    />);
            })
        )
    }
    //父组件通过属性的形式向子组件传递参数
    //子组件通过props接受父组件传递过来的参数
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}></input>
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {this.getItem()}
                </ul>
            </div>
        );


    }
}

export default TodoList
