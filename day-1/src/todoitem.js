import React from 'react';

class TodoItem extends React.Component {

    //子组如果想和父组件通行，需要通过父组件传过来的方法
    handleDelete(){
        this.props.delete (this.props.index)
    }
    render() {
        return (
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
        )
    }
}

export default TodoItem
