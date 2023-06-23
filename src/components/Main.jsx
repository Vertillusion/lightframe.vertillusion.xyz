import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";

import Download from "./Download.jsx";

export default function Main() {

  return (
    <div className="groundPlace">
      <Body />
    </div>
  );
}


const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <span className="body-title">
          定义喜欢的桌面 其实很简单
        </span>
        <br />
        <div className="body-button-container">
          <Download />
          <Button
            type="text"
            className="body-button support-btn"
            onClick={() => window.open("https://afdian.net/@EnderMo")}
          >
            <HeartFilled style={{ color: "rgb(233,233,233)" }} />
            支持一下
          </Button>
        </div>
      </div>
    </div>
  );
};
