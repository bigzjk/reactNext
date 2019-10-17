import React from 'react'
import Router from 'next/router'
import { Icon, Button } from 'antd'

import '../static/style/Header.css'

const Header = (props) => {
    console.log('props', props)

    const handleClick = () => {
        console.log(112, props)
        if(props.handleClick) {
            console.log(123344)
            props.handleClick()
        } else {
            Router.push('/writing')
        }
    }
    return <div className="Header">
        <div className="logo">
            <img src="../static/images/alkun_logo.png" alt=""/>
        </div>
        <div>alkun</div>
        {/* <Link href="/writing"> */}
            <Button
                type="primary"
                size='large'
                onClick={handleClick}
            >
                {props.type !== 'write' ? <Icon type="edit" /> : null}
                {props.text || '写文章'}
            </Button>  
        {/* </Link> */}
    </div>
}
export default Header