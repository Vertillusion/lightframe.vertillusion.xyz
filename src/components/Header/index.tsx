import {headerConf} from '../config'
import React from 'react';

import { HeartFilled } from '@ant-design/icons'
import { Button } from 'antd'

import './header.scss'

export default function Header() {
    return (
      <div className="top">
        <span className="title">轻框 | LightFrame</span>
        <MainOperators />
        <Donate />
      </div>
    );
}

function Donate() {
  return <div className="donate"><Button type="text" shape="round" onClick={_ => window.open('https://afdian.com/a/EnderMo')}>
    <HeartFilled style={{ color: 'red' }} /> 捐助
  </Button></div>;
}

function MainOperators() {
  return (
    <div className='menu'>
        {headerConf.operators.map(item => <Item key={item.href} href={item.href} text={item.text} /> )}
    </div>
  );
}

const Item: React.FC<{href:string, text:string}>=({ href, text }:{href:string, text:string})=>{
  return (
    <Button className='item' onClick={ _ => window.open(href) }> {text} </Button>
  );
}

