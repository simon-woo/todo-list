/**
 * Created by JustinWu on 2017/11/30.
 */
/**
 * 模糊组件List  拿到什么数据就展示什么数据 不做操作和定义规则
 */

import React from 'react'

import { render } from 'react-dom'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.todos;
        return(
            <ol style={{marginTop: '10px', fontSize: '25px', lineHeight: '30px'}}>
                {
                    data.map((item,index) => {
                        return <li key={index} onClick={this.handlerClick.bind(this, item.id)}>{item.text}</li>
                    })
                }

            </ol>
        )
    }

    handlerClick(id) {
        this.props.deleteFun(id)
    }
}

export default List