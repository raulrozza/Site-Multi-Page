import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/Footer';

import { Cover, About, Clients } from './styles';

// Set the states from  to the portifolio
interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  legend: string;
}

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  // Consult json who has the informations
  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((response) => response.json())
      .then((response) => setPortfolio(response));
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio - Modelo</title>
        <meta name="description" content="Descrição das páginas." />
      </Helmet>
      <Cover>
        <div>
          <strong>PORTFÓLIO</strong>
          <p>Serviços realizados pela empresa</p>
        </div>
      </Cover>
      <About>
        <p>
          Suspendisse pellentesque dolor ac ante feugiat faucibus. Nunc vitae
          fermentum urna, ac vehicula ligula.
        </p>
      </About>
      <Clients>
        {/* List the portifolio informations   */}
        <main>
          {portfolio.map((client) => (
            <div key={client.title}>
              <section>
                <img src={client.image} alt={client.image} />
                <p>{client.legend}</p>
              </section>
              <ul>
                <li>
                  <strong>{client.title}</strong>
                </li>
                <li>
                  <p>{client.description}</p>
                </li>
              </ul>
            </div>
          ))}
        </main>
      </Clients>
      <Footer />
    </>
  );
};

export default Portfolio;
