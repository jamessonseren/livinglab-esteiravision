import React from 'react';
import QRCodeReact from 'qrcode.react';

const QRCode = (value:any ) => {
  return <QRCodeReact value={value} />;
};

export default QRCode;