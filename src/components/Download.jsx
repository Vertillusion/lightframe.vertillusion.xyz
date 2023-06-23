import { Modal, Button } from 'antd';
import React, { useState } from 'react';

function Download() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
    document.body.style.overflow = "auto";
  };

  const downloadLink = (url, text) => (
    <Button onClick={() => window.location.href=url}>
      {text}
    </Button>
  );

  return (
    <>
      <Button className="download-btn" type="text" onClick={showModal}>
        下载
      </Button>
      <Modal
        title="下载"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={[]}
      >
        {downloadLink('/Update/LightFrame.zip', 'v0.4.5.1.Build451 - x64 (推荐)')}
        {downloadLink('/Update/Compatible/x86/LightFrame.zip', 'v0.4.5.1.Build451 - x86')}
      </Modal>
    </>
  );
}

export default Download;
