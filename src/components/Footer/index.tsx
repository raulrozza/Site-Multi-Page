import React from 'react';

// Icons import
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

// Utils
import {
  facebook,
  instagram,
  linkedin,
  whatsapp,
} from '../../utils/contactInfo';

// Image import
import placeholder from '../../assets/img/placeholder.webp';

// Style import
import { Main } from './styles';

const Footer: React.FC = () => {
  return (
    <Main>
      {/* Contact component area */}
      <footer>
        <img src={placeholder} alt="footer" />
        <h1>Contato</h1>
        <div>
          <strong>Email:</strong>
          <p>email@contato.empresa.com</p>

          <strong>Telefone:</strong>
          <p>(XX) XXXX-XXXX</p>

          <strong>Endereço:</strong>
          <p>
            Rua Fulano de Tal, N XXX
            <br />
            Bairro - Cidade
          </p>
        </div>
        <ul>
          <li>
            {/* socials networks set */}
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp size={30} />
            </a>
          </li>
          <li>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <AiFillFacebook size={30} />
            </a>
          </li>
          <li>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={30} />
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={30} />
            </a>
          </li>
        </ul>
        <span>Desenvolvido por Raul Rosá</span>
      </footer>
    </Main>
  );
};

export default Footer;
