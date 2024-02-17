import React from 'react';

import "./index.scss";
import { show } from '../Contributors/Contributors';

export default function Acknowledgement() {

  const [display, setDisplay] = React.useState(true);

  function Title(){
    return <div className="title">
      🎉 感谢每一个留下足迹的小伙伴!
    </div>;
  }
  
  function Closer(){
    return <div className="closer" onClick={()=>setDisplay(false)}>&times;</div>
  }
  
  function Content(){
    /* 文字N月赞助者 #414141 20pt
文字<名字> #414141 12pt
文字 鸣谢名单 #5750D3 20pt */

    return <div className="content">
      <div className="title">1月赞助者</div>
      <div className="names">@abc @aaa</div>
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