import {headerConf} from './config.ts'

import { HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';

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
  return <div className="donate"><Button type="text" shape="round" onClick={_ => window.open('https://afdian.net/@EnderMo')}>
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

function Item({ href, text }){
  return (
    <Button className='item' onClick={ _ => window.open(href) }> {text} </Button>
  );
}

