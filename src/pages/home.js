import React, { useState } from 'react';
import { Content, Footer, Hero, Img } from '../components';
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
  const [translateXValue, setTranslateXValue] = useState(0);

  const handleSliderButton = (translateX) => {
    setTranslateXValue(translateX);
  };

  return (
    <>
      {/* HERO START */}
      <Hero>
        <Hero.Background>
          <Hero.Slider
            style={{ transform: `translateX(-${translateXValue}%)` }}
          >
            <Hero.Slide className="bg-1" />
            <Hero.Slide className="bg-2" />
            <Hero.Slide className="bg-3" />
            <Hero.Slide className="bg-4" />
          </Hero.Slider>
          <Hero.Logo>FirePlace</Hero.Logo>
          <Hero.Wrapper>
            <Hero.Title>FirePlace Şömine ile Anın Keyfini Yaşa</Hero.Title>
            <Hero.Text>
              Kaliteli hizmet sunarak müşterilerimizin memnuniyetlerinin
              sürekliliğini garanti ediyoruz.
            </Hero.Text>
          </Hero.Wrapper>
          <Hero.BoxWrapper>
            <Hero.Box>
              <Hero.Button onClick={() => handleSliderButton(0)} />
              <Hero.Button onClick={() => handleSliderButton(100)} />
              <Hero.Button onClick={() => handleSliderButton(200)} />
              <Hero.Button onClick={() => handleSliderButton(300)} />
            </Hero.Box>
          </Hero.BoxWrapper>
        </Hero.Background>
      </Hero>
      {/* HERO END */}
      {/* IMG GALLERY START */}
      <div>
        <Hero.SignatureWrapper>
          <Hero.Signature>art of business</Hero.Signature>
        </Hero.SignatureWrapper>
        <Img.Wrapper>
          <Img.Container>
            <Img src={Img_2_JPG} style={{ objectPosition: 'bottom' }} />
          </Img.Container>
          <Img.Container>
            <Img src={Img_4_JPG} style={{ objectPosition: '77% 77%' }} />
          </Img.Container>
          <Img.Container>
            <Img src={Img_3_JPG} style={{ objectPosition: '30% 30%' }} />
          </Img.Container>
        </Img.Wrapper>
        <Hero.SignatureWrapper style={{ background: '#fff', color: '#000' }}>
          <Hero.Signature>art of business</Hero.Signature>
        </Hero.SignatureWrapper>
      </div>
      {/* IMG GALLERY END */}
      {/* ABOUT SECTION START */}
      <Content>
        <Content.ImgContainer>
          <Content.Img src={Img_4_JPG} style={{ objectPosition: '77% 77%' }} />
        </Content.ImgContainer>
        <Content.Wrapper>
          <Content.Heading>Hakkımızda</Content.Heading>
          <Content.Text>
            X, sektöründe marka olan X, Araba yedek parça üretim ve pazarlamada
            uluslararası üst düzey bir şirket olan X, İnşaat ve Turizm alanında
            faaliyet gösteren X ile güç birliği yapılarak ortaya çıkan bir dış
            ticaret şirketidir.
          </Content.Text>
          <br />
          <Content.Text>
            Güçlü bir bütünleşme ile kurulan X’ın amacı, ülkemizde başlatılan
            dış ticaret atılımlarında öncü rol oynamak ve dış ticaret
            etkinliklerini örgütlemektir.
          </Content.Text>
          <br />
          <Content.Text>
            X markası altında, güvenilir üretici toptancı sıfatı ile doğru
            fiyat, hızlı sevkiyat ilkesini benimseyerek, ürün sağlayıcılar ve
            son kullanıcılara yüksek kalitede ürün sunmaktadır.
          </Content.Text>
          <br />
          <Content.Text>
            Dünyanın birçok noktasına hizmet eden şirketimiz; sebze meyve,
            sağlık ürünleri, Makine, Yedek Parça, Metal ve Kauçuk döküm ürünleri
            göndermektedir.
          </Content.Text>
        </Content.Wrapper>
      </Content>
      {/* ABOUT SECTION END */}
      {/* VISION SECTION START */}
      <Content style={{ background: 'black', color: '#fff' }}>
        <Content.ImgContainer>
          <Content.Img
            src={Img_1_JPG}
            style={{ objectPosition: 'center center' }}
          />
        </Content.ImgContainer>
        <Content.Wrapper>
          <Content.Heading style={{ color: '#fff' }}>Vizyon</Content.Heading>
          <Content.Text>
            Sıfır hata, %100 müşteri memnuniyeti ile Türkiye ve dünya pazarında
            lider kuruluşlar arasında olmayı hedefleyen X,
          </Content.Text>
          <br />
          <Content.Text>
            Alanında öncü bir geleceğe oynarken iş ortakları ile yaratıcı
            çözümler üreten, teknoloji ve markaları ile fark yaratan, bireye ve
            çevreye saygılı bir dünya şirketi olmayı da amaçlıyor.
          </Content.Text>
          <br />
          <Hero.Signature style={{ margin: 'initial' }}>
            art of business
          </Hero.Signature>
        </Content.Wrapper>
      </Content>
      {/* VISION SECTION END */}
      {/* MISSION SECTION START */}
      <Content>
        <Content.ImgContainer>
          <Content.Img src={Img_3_JPG} style={{ objectPosition: '30% 30%' }} />
        </Content.ImgContainer>
        <Content.Wrapper>
          <Content.Heading>Misyon</Content.Heading>
          <Content.Text>
            • Müşterilerimizin ihtiyaçlarını yerinde anlayıp kaliteli ürün ve
            hizmet sunarak memnuniyetlerinin sürekliliğini garanti etmek,
            memnuniyet oranını arttırmak ve güvenilir ve aranan bir firma olmak.
          </Content.Text>
          <br />
          <Content.Text>
            • Müşteri ve tedarikçi sayımız ile ürün ve hizmet kalite ve
            çeşitliliğimizi sürekli iyileştirip arttırmak.
          </Content.Text>
          <br />
          <Content.Text>
            • Çalışanlarımız arasında karşılıklı güven, saygı, sevgi, anlayış ve
            iletişimi hep daha iyiye götürmek.
          </Content.Text>
          <br />
          <Content.Text>
            • İş hacmini sürekli geliştirmek ve ülke ekonomisine sürekli katkıda
            bulunmak.
          </Content.Text>
          <br />
          <Content.Text>
            • Paydaşlar arasında adil dengeyi sağlamak.
          </Content.Text>
          <br />
          <Content.Text>
            • İş hacmini sürekli geliştirmek ve ülke ekonomisine sürekli katkıda
            bulunmak.
          </Content.Text>
          <br />
          <Content.Text>
            • Açık, şeffaf ve etik kuralları önemseyen, yasal mevzuata uyan bir
            firma olmak.
          </Content.Text>
          <br />
          <Content.Text>
            • Topluma ve çevreye saygılı örnek bir firma olmak.
          </Content.Text>
          <br />
          <Content.Text>
            • Sosyal sorumluluk projelerine destek verip yer almak.
          </Content.Text>
        </Content.Wrapper>
      </Content>
      {/* MISSION SECTION END */}
      {/* FOOTER START */}
      <Footer>
        <Footer.Wrapper>
          <Footer.Content>
            <Footer.Heading>FirePlace</Footer.Heading>
            <Footer.Text>Lorem ipsum dolor sit amet consectetur.</Footer.Text>
          </Footer.Content>
          <Footer.Content>
            <Footer.Heading>Adres</Footer.Heading>
            <Footer.Text>
              Lorem ipsum dolor sit amet consectetur,lorem ipsum dolor amet
              consectetur.
            </Footer.Text>
            <br />
            <Footer.Text>lorem ipsum dolor sit amet consectetur.</Footer.Text>
          </Footer.Content>
          <Footer.Content>
            <Footer.Heading>İletişim</Footer.Heading>
            <Footer.ContactWrapper>
              <Footer.Text>Lorem Ipsum Dolor</Footer.Text>
            </Footer.ContactWrapper>
            <Footer.ContactWrapper>
              <Footer.SubHeading>Telefon</Footer.SubHeading>
              <Footer.Link href="tel:00000000000">
                0 (000) 000 00 00
              </Footer.Link>
            </Footer.ContactWrapper>
            <Footer.ContactWrapper className="no-margin">
              <Footer.SubHeading>E-mail</Footer.SubHeading>
              <Footer.Link href="mailto:destek@lorem.com">
                destek@lorem.com
              </Footer.Link>
            </Footer.ContactWrapper>
          </Footer.Content>
          <Footer.Content className="no-margin">
            <Footer.Heading>Sosyal Medya</Footer.Heading>
            <Footer.List>
              <Footer.Item>
                <Footer.Link href="https://www.facebook.com/artiiki/">
                  Facebook
                </Footer.Link>
              </Footer.Item>
              <Footer.Item>
                <Footer.Link href="https://www.instagram.com/artiiki/">
                  Instagram
                </Footer.Link>
              </Footer.Item>
              <Footer.Item>
                <Footer.Link href="https://twitter.com/artiiki">
                  Twitter
                </Footer.Link>
              </Footer.Item>
              <Footer.Item>
                <Footer.Link href="https://www.youtube.com/user/artiiki">
                  Youtube
                </Footer.Link>
              </Footer.Item>
            </Footer.List>
          </Footer.Content>
        </Footer.Wrapper>
        <Footer.Wrapper
          style={{
            alignItems: 'center',
            background: '#000',
            margin: 0,
            padding: '30px 0',
            justifyContent: 'center',
          }}
        >
          <Footer.Text style={{ color: '#f7f7f7' }}>
            Copyright &copy; 2021
          </Footer.Text>
        </Footer.Wrapper>
      </Footer>
      {/* FOOTER END */}
    </>
  );
}

export default Home;
