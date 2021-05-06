import React from 'react';
import { Hero, Img } from '../components';
import { assets } from '../fixtures/assets';
import Img_1_JPG from '../assets/fireplace-1.jpg';
import Img_2_JPG from '../assets/fireplace-2.jpg';
import Img_3_JPG from '../assets/fireplace-3.jpg';
import Img_4_JPG from '../assets/fireplace-4.jpg';
import Img_1_WEBP from '../assets/fireplace-1.webp';
import Img_2_WEBP from '../assets/fireplace-2.webp';
import Img_3_WEBP from '../assets/fireplace-3.webp';
import Img_4_WEBP from '../assets/fireplace-4.webp';

function Home() {
  return (
    <>
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
        <Hero.SignatureWrapper>
          <Hero.Signature>art of business</Hero.Signature>
        </Hero.SignatureWrapper>
      </Hero>
      <Img.Wrapper>
        <Img.Container>
          <Img src={Img_2_JPG} style={{ objectPosition: 'bottom' }} />
        </Img.Container>
        <Img.Container>
          <Img src={Img_4_JPG} style={{ objectPosition: '77% 77%' }} />
        </Img.Container>
        <Img.Container>
          <Img src={Img_3_JPG} />
        </Img.Container>
      </Img.Wrapper>
      <Hero.SignatureWrapper style={{ background: '#fff' }}>
        <Hero.Signature>art of business</Hero.Signature>
      </Hero.SignatureWrapper>
      <Img.Container>
        <Img src={Img_4_JPG} style={{ objectPosition: '77% 77%' }} />
      </Img.Container>
    </>
  );
}

export default Home;
