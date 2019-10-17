import React, { useState } from 'react'
import Router from 'next/router'
import { Layout, Input, Button } from 'antd'
import axios from 'axios'
import Editor from 'for-editor'

import Header from '../components/Header.js'
import '../static/style/Writing.css'

const { TextArea } = Input;
const Writing = () => {
    const [contVal, setContVal] = useState('### 内容区域')
    const [titleVal, setTitleVal] = useState('在此输入你的标题-md')

    const handleTitleVal = (e) => {
        console.log(e)
        setTitleVal(e.target.value)
    }

    const handleChange = (val) => {
        setContVal(val)
    }
    return <div className="Writing">
        <Header
            type="write"
            text="提交"

            handleClick={()=>{
                axios.post( 'http://localhost:5555/blog_add', {
                        title: titleVal,
                        content: contVal
                    }).then(resp => {
                        console.log(resp)
                    })
            }}
        />
        <Layout>
            <div style={{ margin: '24px 0' }} />
            <input
                className="titleInp"
                type="text"
                value={titleVal}
                onChange={handleTitleVal}
            />
            <Editor
              value={contVal}
              onChange={handleChange}
            />
        </Layout>
    </div>
}

export default Writing
