// TODO 设计一个新的 Contributors 组件
// 现在是用旧的解决方案，代码在 index.html 下方

import React from "react";
import { useState } from "react";

import { contributions } from "../config";

import "./contributors.scss";

function Return({ onClick }) {
  const icon = (
    <svg
      width="32"
      height="32"
      t="1660364149036"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1325"
    >
      <path
        d="M393.390114 512.023536l347.948667-336.348468c20.50808-19.85828 20.50808-51.997258 0-71.792093-20.507056-19.826558-53.778834-19.826558-74.28589 0L281.990954 476.135164c-20.476357 19.826558-20.476357 51.981908 0 71.746044l385.061936 372.236839c10.285251 9.91379 23.728424 14.869662 37.173644 14.869662 13.446243 0 26.889417-4.956895 37.112246-14.901385 20.50808-19.826558 20.50808-51.919487 0-71.746044L393.390114 512.023536"
        p-id="1326"
        fill="#141414"
      ></path>
    </svg>
  );

  return (
    <div className="return">
      <div onClick={onClick}>{icon}</div>
    </div>
  );
}
function Content() {
  return contributions.map((content, index) => {
    return <div key={index} className="content">
      <div className="sidebar">
        <div className="explain">{content.explain}</div>
        <span onClick={() => window.open(content.link.href)}>
          <strong>{content.link.text}</strong>
        </span>
      </div>
      <div className="body">
        <div className="title">{content.title}</div>
        <div className="text">{content.names.map((item, index) => <div key={index}>{item}</div>)}</div>
      </div>
    </div>;
  });
}


const hide = () => {
  // setModalVisible(false);
  const overlay = document.querySelector(".overlay") as HTMLElement;
  overlay.style.transform = "translateX(-100%)";
  document.body.style.overflow = "auto"; // scrollbar
};
export const show = () => {
  // setModalVisible(true);
  const overlay = document.querySelector(".overlay") as HTMLElement;
  overlay.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden"; // scrollbar
};

const Contributors = ({children}:React.PropsWithChildren) => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div
        // style={{
        //   transform: modalVisible ? "translateX(0)" : "translateX(-100%)",
        // }}
        className="overlay"
      >
        <Return onClick={hide} />
        <Content />
      </div>
    </>
  );
};

export default Contributors;
