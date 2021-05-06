import React from 'react';

export default function Img({ url, alt, ...rest }) {
  return <img url={url} alt={alt} {...rest} />;
}

