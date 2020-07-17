import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Libs
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import Carousel from 'react-multi-carousel';

// Components
import Services from '../../components/Services';
import Footer from '../../components/Footer';

// Assets
import imgInfo from '../../assets/img/logo_big.png';

// Utils
import {
  facebook,
  instagram,
  linkedin,
  whatsapp,
} from '../../utils/contactInfo';

import { CarouselContainer, About, Info, CarouselImage } from './styles';

const responsive = {
  all: {
    breakpoint: { max: 8000, min: 0 },
    items: 1,
  },
};
// Set state from carousel information
interface carouselImage {
  text: string;
  image: string;
}

const Home: React.FC = () => {
  const [carouselImages, setCarouselImages] = useState<carouselImage[]>([]);

  useEffect(() => {
    fetch('/data/homeCarousel.json')
      .then((response) => response.json())
      .then((response) => setCarouselImages(response));
  }, []);

  return (
    <>
      <Helmet>
        <title>Modelo</title>
        <meta name="description" content="Descrição da página." />
      </Helmet>
      <CarouselContainer>
        <main>
          <ul className="contact-items">
            <li>
              {/* Links to socials networks */}
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp size={25} />
              </a>
            </li>
            <li>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <AiFillFacebook size={25} />
              </a>
            </li>
            <li>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram size={25} />
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={25} />
              </a>
            </li>
          </ul>
          <section>
            <Carousel
              responsive={responsive}
              autoPlay
              autoPlaySpeed={10000}
              infinite
              removeArrowOnDeviceType="all"
            >
              {/* List carousel images */}
              {carouselImages.map((item) => (
                <CarouselImage key={item.image} image={item.image}>
                  <div className="cover">
                    <p>{item.text}</p>
                    <span>
                      <Link to="/contact">
                        <button type="button">ENTRE EM CONTATO!</button>
                      </Link>
                    </span>
                  </div>
                </CarouselImage>
              ))}
            </Carousel>
          </section>
        </main>
      </CarouselContainer>
      <About>
        <p>
          Morbi venenatis at felis in elementum. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        <div>
          <a href="/contact" role="button">
            <button type="button">Entre em Contato</button>
          </a>
          <a href="/about" role="button">
            <button type="button">Saiba Mais</button>
          </a>
        </div>
      </About>
      <Services showServiceLinkOnModal limit={4} />
      <Info>
        <div>
          <picture>
            <img src={imgInfo} alt="Logo da Empresa" />
          </picture>
        </div>

        <div>
          <p>
            Nulla egestas neque a aliquam molestie. Duis vel nisi sodales,
            auctor nisl ut, ullamcorper est. Mauris et gravida ante, at finibus
            nunc.
          </p>
          <ul>
            <li>
              {/* Perguntar para o raul */}
              <strong>
                {(() => {
                  const foundingDate = new Date('01/01/1995');
                  return new Date().getFullYear() - foundingDate.getFullYear();
                })()}
              </strong>
              <span>Anos de Mercado</span>
            </li>
            <li>
              <strong>X</strong>
              <span>Mais de Projetos</span>
            </li>
          </ul>
        </div>
      </Info>
      <Footer />
    </>
  );
};

export default Home;
