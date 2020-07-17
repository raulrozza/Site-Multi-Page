import React from 'react';
import PropTypes from 'prop-types';

// Icons import
import { AiOutlineClose } from 'react-icons/ai';
import { StyledModal } from './styles';

// Declaring services state
interface Service {
  id: number;
  title: string;
  fullText: React.ReactNode[];
  image: string;
}

interface Props {
  service: Service;
  showModal: (state: boolean) => void;
  showServiceLink?: boolean;
}

const Modal: React.FC<Props> = ({
  service,
  showModal,
  showServiceLink = false,
}) => (
  <StyledModal image={service.image}>
    <div className="overlay">
      <div className="modal-content">
        <div className="close">
          <button type="button" onClick={() => showModal(false)}>
            <AiOutlineClose size={25} />
          </button>
        </div>

        <section>
          <div title={service.title} />
        </section>
        <strong>{service.title}</strong>
        <div className="content">
          <p>{service.fullText}</p>
        </div>

        <div className="link-container">
          {showServiceLink && <a href="/services">Todos os Nossos Serviços</a>}
          <a href="/contact">Entre em Contato</a>
        </div>
      </div>
    </div>
  </StyledModal>
);

Modal.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    fullText: PropTypes.arrayOf(PropTypes.node).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  showModal: PropTypes.func.isRequired,
  showServiceLink: PropTypes.bool,
};

Modal.defaultProps = {
  showServiceLink: false,
};

export default Modal;
