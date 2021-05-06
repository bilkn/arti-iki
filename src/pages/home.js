import React from 'react';
import { Content, Hero, Img } from '../components';
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
      {/* HERO START */}
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
      {/* HERO END */}

      {/* IMG GALLERY START */}
      <div>
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
      </div>
      {/* IMG GALLERY END */}

      {/* ABOUT SECTION START */}
      <Content>
        <Img.Container>
          <Img src={Img_4_JPG} style={{ objectPosition: '77% 77%' }} />
        </Img.Container>
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
        <Img.Container>
          <Img src={Img_4_JPG} style={{ objectPosition: '77% 77%' }} />
        </Img.Container>
        <Content.Wrapper>
          <Content.Heading>Vizyon</Content.Heading>
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
        <Img.Container>
          <Img src={Img_3_JPG} style={{ objectPosition: '30% 30%' }} />
        </Img.Container>
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
    </>
  );
}

export default Home;
