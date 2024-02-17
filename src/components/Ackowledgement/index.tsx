import React, { useState } from 'react';

import "./index.scss";
import { show } from '../Contributors/Contributors';
import { names, title } from './data';

export default function Acknowledgement() {

  const [display, setDisplay] = useState(true);

  function Title(){
    return <div className="title">
      🎉 感谢每一个留下足迹的小伙伴!
    </div>;
  }
  
  function Closer(){
    return <div className="closer" onClick={()=>setDisplay(false)}>&times;</div>
  }
  
  function Content(){

    return <div className="content">
      <div className="title">{title}</div>
      <div className="names">{names.map((item, index) => <span key={index}>@{item}</span>)}</div>
      <div className="contributors" onClick={show}>鸣谢名单</div>
    </div>;
    
  }

  return display ? (
    <div className="acknowledgement">
      <div className="header">
        <Title/>
        <Closer/>
      </div>
      <Content/>
    </div>
  ):<></>;
}