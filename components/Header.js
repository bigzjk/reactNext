import React from 'react'
import Router from 'next/router'
import { Icon, Button } from 'antd'

import '../static/style/header.css'

const Header = (props) => {
    const handleClick = () => {
        if(props.handleClick) {
            console.log(123344)
            props.handleClick()
        } else {
            // Router.push('/writing')
            location.href = './writing.html'
        }
    }
    return <div className="Header">
        <div className="logo" onClick={()=>{Router.push('/')}}>
            <img src="../static/images/alkun_logo.png" alt=""/>
        </div>
        <div>alkun</div>
            <Button
                type="primary"
                size='large'
                onClick={handleClick}
            >
                {props.type !== 'write' ? <Icon type="edit" /> : null}
                {props.text || '写文章'}
            </Button>  
    </div>
}
export default Header