/**
 * Created by JustinWu on 2017/11/30.
 */

/**
 * 这是智能组件  就是能处理操作数据的组件 定义数据的规则
 */
import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 声明状态保存数据
            todos: []
        }
    }

    render() {
        return(
            <div>
                /*添加submitFun */
                <Input submitFun={this.submitFun.bind(this)}/>
                <List todos={this.state.todos} deleteFun={this.deleteFun.bind(this)}/>
            </div>
        )
    }

    submitFun(value) {
        const id = this.state.todos.length
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
    }

    deleteFun(id) {
        let data = this.state.todos;
        this.setState({
            todos: data.filter((item) => {
                if(item.id !== id){
                    return item
                }
            })
        })
    }
}

export default Todo