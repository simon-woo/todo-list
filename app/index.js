/**
 * Created by JustinWu on 2017/11/30.
 */
/**
 * 这是入口文件， 也就是需要打包的文件
 */

import React from 'react'

import { render } from 'react-dom'

// 引用todo组件
import Todo from './container/Todo'

render (
    <Todo/>,
    document.getElementById("app")
);