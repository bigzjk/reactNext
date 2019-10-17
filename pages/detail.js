import React, {useState} from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
import Router, {withRouter} from 'next/router'

import { Layout } from 'antd'
import Editor from 'for-editor'
import axios from 'axios'
import Header from '../components/Header.js'
import SiderBox from '../components/Sider.js'
import '../static/style/Detail.css'

const { Sider, Content } = Layout
const Detail = () => {
    // 路由钩子函数:
    // routeChangeStart
    // routeChangeComplete
    // beforeHistoryChange
    // routeChangeError
    // HashChangeStart
    // HashChangeComplete
    const { blog_id } = Router.query
    console.log('blog_id:' + blog_id)
    axios.get('http://localhost:5555/blog_getlist').then(resp => {
        console.log('resp', resp)
    })
    // http://localhost:5555/blog_getlist
    const [value, setValue] = useState('### abc')
    const handleChange = (val) => {
        setValue(val)
        console.log(val)
    }
    
    return <div className="Detail">
        <Header />
        <Layout>
            <Content>
                <Editor
                    value={value}
                    onChange={handleChange}
                    preview
                    toolbar={{}}
                />
            </Content>
            <Sider width="15vw">
                <SiderBox></SiderBox>
            </Sider>
        </Layout>
    </div>
}

export default withRouter(Detail)
