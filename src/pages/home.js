import React from 'react';
import { Hero } from '../components';

function Home() {
  return (
    <Hero>
      <Hero.Background>
        <Hero.Logo>FirePlace</Hero.Logo>
        <Hero.Wrapper>
          <Hero.Title>FirePlace Şömine ile Anın Keyfini Yaşa</Hero.Title>
          <Hero.Text>
            Kaliteli hizmet sunarak müşterilerimizin memnuniyetlerinin
            sürekliliğini garanti ediyoruz.
          </Hero.Text>
        </Hero.Wrapper>
      </Hero.Background>
    </Hero>
  );
}

export default Home;
