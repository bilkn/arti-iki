import React from 'react';
import "../img/img.scss";

export default function Img({ src, alt, ...rest }) {
  return <img className="img" src={src} alt={alt} {...rest} />;
}

Img.Container = function ImgContainer({ children, ...rest }) {
  return (
    <div className="img__container" {...rest}>
      {children}
    </div>
  );
};

Img.Wrapper = function ImgWrapper({ children, ...rest }) {
  return <div className="img__wrapper" {...rest}>{children}</div>;
};
