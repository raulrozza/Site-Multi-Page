import React from 'react';
import { Helmet } from 'react-helmet';

// Componentes
import Services from '../../components/Services';
import Footer from '../../components/Footer';

// Estilos
import { Hero, ServiceWrapper } from './styles';

const Work: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Serviços - Modelo</title>
        <meta name="description" content="Descrição da página." />
      </Helmet>
      <Hero>
        <main>
          <section>
            <strong>Serviços</strong>
            <p>Duis est ante, mollis in scelerisque at, commodo et lectus.</p>
          </section>
        </main>
      </Hero>
      {/* Use the components related to services */}
      <ServiceWrapper>
        <Services />
      </ServiceWrapper>
      <Footer />
    </>
  );
};

export default Work;
