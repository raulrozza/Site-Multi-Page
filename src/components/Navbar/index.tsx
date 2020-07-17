import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Navbar } from './styles';

// Assets
import logo from '../../assets/img/logo_nav.png';

// Utils
import { whatsapp } from '../../utils/contactInfo';

const menu: React.FC = () => {
  async function handleMenu(): Promise<void> {
    const showMenu = document.querySelector('.menu-section');
    if (showMenu) showMenu.classList.toggle('on');
  }
  /*
    This component defines the site's top navbar.
*/
  return (
    <Navbar>
      <header>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div className="menu-section">
          <button className="menu-toggle" type="button" onClick={handleMenu}>
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </button>

          <nav>
            <ul>
              <li>
                <Link to="/" onClick={handleMenu}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={handleMenu}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleMenu}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portifolio" onClick={handleMenu}>
                  Portifólio
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleMenu}>
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="submit">
                    <AiOutlineWhatsApp size={20} />
                    Whatsapp
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Navbar>
  );
};

export default menu;
