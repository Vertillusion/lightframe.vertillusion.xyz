import {headerConf} from './config.ts'

import { HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';

export default function Header() {
    return (
      <div className="top">
        <center>
          <MainContent/>
        </center>
      </div>
    );
}

function MainContent() {
  return <ul>
    <li><a href="#">轻框 | LightFrame</a></li>
    <MainOperators />
    <div id="ri">
        <Button type="text" shape="round" onClick={_ => window.open('https://afdian.net/@EnderMo')} >
          <HeartFilled style={{color:'red'}} /> 捐助
        </Button>
    </div>
  </ul>;
}
function MainOperators() {
  return (
    <nav className="nav">
      <input type="checkbox" className="nav__cb" id="menu-cb" />
      <div className="nav__content">
        <ul className="nav__items">
          {headerConf.operators.map(item => <Item key={item.href} href={item.href} text={item.text} /> )}
        </ul>
      </div>
      <label className="nav__btn" htmlFor="menu-cb"></label>
    </nav>
  );
}

function Item({ href, text }) {
  return (
    <li className="nav__item">
      <span
        className="nav__item-text"
        onClick={ _ => window.open(href)}
      >
        {text}
      </span>
    </li>
  );
}

