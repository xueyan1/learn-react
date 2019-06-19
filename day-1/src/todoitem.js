import React from 'react';
import './css/style.css'
class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    //子组如果想和父组件通行，需要通过父组件传过来的方法
    handleDelete() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
    render() {
        const { content } = this.props;
        return (
            <div className='item' onClick={this.handleDelete}>{content}</div>
        )
    }
}

export default TodoItem
