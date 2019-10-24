import React, { useState } from 'react'
// import Router from 'next/router'
import dynamic from 'next/dynamic'

import { Layout } from 'antd'
import axios from 'axios'
// import Editor from 'for-editor'

import Header from '../components/Header.js'
import '../static/style/Writing.css'
// const Editor = dynamic(import('for-editor'))

const Editor = dynamic(
    import('for-editor'),
    {
      ssr: false   //这个要加上,禁止使用 SSR
    }
  )

const Writing = () => {
    const [contVal, setContVal] = useState('### 内容区域')
    const [titleVal, setTitleVal] = useState('')
    const handleTitleVal = (e) => {
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
                        paramInfo: JSON.stringify({
                            title: titleVal,
                            content: contVal
                        })
                    }).then(resp => {
                        console.log(resp)
                    })
            }}
        />
        <Layout>
            <input
                className="titleInp"
                type="text"
                value={titleVal}
                placeholder="在此输标题-md"
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
