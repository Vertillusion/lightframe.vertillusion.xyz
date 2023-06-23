// TODO 设计一个新的 Contributors 组件
// 现在是用旧的解决方案，代码在 index.html 下方

const Contributors = () => {

  return (
    <>
      <div className="fooBtn" type="primary" onClick={_=>GoPage('/contributors/')}>
        鸣谢名单
      </div>
    </>
  );
};

export default Contributors