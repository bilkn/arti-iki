import React from 'react';

export default function Hero({ children, ...rest }) {
  return (
    <div className="hero" {...rest}>
      {children}
    </div>
  );
}

Hero.Logo = function HeroLogo({ children, ...rest }) {
  return (
    <h1 className="hero__logo" {...rest}>
      {children}
    </h1>
  );
};

Hero.Title = function HeroTitle({ children, ...rest }) {
  return (
    <h2 className="hero__title" {...rest}>
      {children}
    </h2>
  );
};

Hero.Text = function HeroText({ children, ...rest }) {
  return (
    <p className="hero__text" {...rest}>
      {children}
    </p>
  );
};
