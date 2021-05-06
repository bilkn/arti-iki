import React from 'react';
import './footer.scss';

export default function Footer({ children, ...rest }) {
  return (
    <footer className="footer" {...rest}>
      {children}
    </footer>
  );
}

Footer.Wrapper = function FooterWrapper({ children, ...rest }) {
  return (
    <div className="footer__wrapper" {...rest}>
      {children}
    </div>
  );
};

Footer.Heading = function FooterHeading({ children, ...rest }) {
  return (
    <h3 className="footer__heading" {...rest}>
      {children}
    </h3>
  );
};

Footer.SubHeading = function FooterSubHeading({ children, ...rest }) {
  return (
    <h4 className="footer__sub-heading" {...rest}>
      {children}
    </h4>
  );
};

Footer.Text = function FooterText({ children, ...rest }) {
  return (
    <p className="footer__text" {...rest}>
      {children}
    </p>
  );
};

Footer.List = function FooterList({ children, ...rest }) {
  return (
    <ul className="footer__list" {...rest}>
      {children}
    </ul>
  );
};

Footer.Item = function FooterItem({ children, ...rest }) {
  return (
    <ul className="footer__item" {...rest}>
      {children}
    </ul>
  );
};

Footer.Link = function FooterLink({ children, ...rest }) {
  return (
    <a className="footer__link" target="_blank" {...rest}>
      {children}
    </a>
  );
};
