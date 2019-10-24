import React,{ useState, useEffect} from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
// import Router from 'next/router'
import { Layout } from 'antd'
import axios from 'axios'

import Header from '../components/Header.js'
import SiderBox from '../components/Sider.js'
import ListBox from '../components/ListBox.js'
import '../static/style/index.css'


const { Sider, Content } = Layout
const Home = () => {
    // 路由钩子函数:
    // routeChangeStart
    // routeChangeComplete
    // beforeHistoryChange
    // routeChangeError
    // HashChangeStart
    // HashChangeComplete
    // Router.events.on('routeChangeStart', (a) => {
    //     console.log(a)
    // })
    // Router.events.on('routeChangeComplete', (a) => {
    //     console.log('end',a)
    // })
    const [list, setList] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5555/blog_getlist/').then(resp => {
            let list = resp.data.data
            setList(list)
        })
        // return () => {
        //     cleanup
        // };
    }, [])


    return <div className="home">
        <Header />
        <Layout>
            <Content>
                <ListBox list={list} />
            </Content>
            <Sider width="15vw">
                <SiderBox></SiderBox>
            </Sider>
        </Layout>
    </div>
}

export default Home
