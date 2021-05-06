import React from 'react';
import "./content.scss";

export default function Content({ children, ...rest }) {
  return (
    <div className="content" {...rest}>
      {children}
    </div>
  );
}

Content.Wrapper = function ContentWrapper({ children, ...rest }) {
  return (
    <div className="content__wrapper" {...rest}>
      {children}
    </div>
  );
};

Content.Heading = function ContentHeading({ children, ...rest }) {
  return (
    <h2 className="content__heading" {...rest}>
      {children}
    </h2>
  );
};

Content.Text = function ContentText({ children, ...rest }) {
  return (
    <p className="content__text" {...rest}>
      {children}
    </p>
  );
};
