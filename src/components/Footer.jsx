import {footerText} from "./config.ts"

import Contributors from "./Contributors.jsx";

export default function Footer(){
  return (
    <div className="footer">
      <About/>
      <div style={{fontSize: "13px"}}>
        *将本作品用于非正当用途而造成的后果,责任与本作品无关.
      </div>
      <div>
        Copyright © 2018-{new Date().getFullYear()} 
        VertillusionStudio. All Rights Reserved.
      </div>
      <div className="btn-container">
        <Contributors />
        <a className="fooBtn" href="https://github.com/EnderMo/lightframe.vertillusion.xyz/blob/gh-pages/index.html" target="_blank" >
          改进本页面
        </a>
        <br/>
      </div>
    </div>
  );
}

function About(){
  return <div>{footerText.split("\n").map((item, i) => <div style={{fontSize: "8px"}} key={i}>{item}</div>)}</div>
}