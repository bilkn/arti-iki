import React from 'react';
import './hero.scss';

export default function Hero({ children, ...rest }) {
  return (
    <div className="hero" {...rest}>
      {children}
    </div>
  );
}

Hero.Background = function HeroBackground({ children, ...rest }) {
  return (
    <div className="hero__background" {...rest}>
      {children}
    </div>
  );
};

Hero.Wrapper = function HeroWrapper({ children, ...rest }) {
  return (
    <div className="hero__wrapper" {...rest}>
      {children}
    </div>
  );
};

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

Hero.SignatureWrapper = function HeroSignatureWrapper({ children, ...rest }) {
  return (
    <div className="hero__signature-wrapper" {...rest}>
      {children}
    </div>
  );
};

Hero.Signature = function HeroSignature({ children, ...rest }) {
  return (
    <p className="hero__signature" {...rest}>
      {children}
    </p>
  );
};

Hero.Slider = function HeroSlider({ children, ...rest }) {
  return (
    <div className="hero__slider" {...rest}>
      {children}
    </div>
  );
};

Hero.Slide = function HeroSlide({ className, children, ...rest }) {
  return (
    <div className={`hero__slide ${className || ''}`} {...rest}>
      {children}
    </div>
  );
};

Hero.BoxWrapper = function HeroBoxWrapper({ children, ...rest }) {
  return (
    <div className="hero__box-wrapper" {...rest}>
      {children}
    </div>
  );
};

Hero.Box = function HeroBox({ children, ...rest }) {
  return (
    <div className="hero__box" {...rest}>
      {children}
    </div>
  );
};

Hero.Button = function HeroButton({ children, ...rest }) {
  return (
    <button className="hero__button" {...rest}>
      {children}
    </button>
  );
};
