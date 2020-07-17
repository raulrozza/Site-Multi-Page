import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Icons import
import { AiOutlineArrowRight } from 'react-icons/ai';

// Component
import Modal from '../Modal';

// Style
import { Main } from './styles';

// Assets
import placeholder from '../../assets/img/portfolio/placeholder.png';

/*
    This component defines the site's content. All the information of the services has being
    imported from here
*/
const services = [
  {
    id: 0,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
  {
    id: 1,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
  {
    id: 2,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
  {
    id: 3,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
  {
    id: 4,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
  {
    id: 5,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
  {
    id: 6,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
  {
    id: 7,
    title: 'Serviço X',
    description: 'Resumo do serviço',
    fullText: [
      'Praesent nec mi ex. Cras eget commodo enim. Integer nunc nisl, maximus vel ex porttitor, luctus efficitur nibh. Curabitur nisi neque, pretium vitae luctus eu, rhoncus non nisl. Aliquam convallis ultrices arcu, et placerat velit aliquam quis. Proin mollis sit amet odio eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum libero sit amet sodales vulputate. Nunc eget finibus massa. Donec varius metus sit amet mi faucibus pellentesque.',
    ],
    image: placeholder,
  },
];
// Declaring props
interface Props {
  limit?: number;
  showServiceLinkOnModal?: boolean;
}

const Services: React.FC<Props> = ({ limit, showServiceLinkOnModal }) => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [showModal, setShowModal] = useState(false);

  async function handleOpen(id: number): Promise<void> {
    setSelectedService(services[id]);
    setShowModal(true);
  }

  return (
    <>
      <Main>
        <section>
          {/* List services */}
          {(limit !== undefined ? services.slice(0, limit) : services).map(
            (service) => (
              <div key={service.id}>
                <section>
                  <img src={service.image} alt={service.title} />
                </section>
                <ul>
                  <li>
                    <strong>{service.title}</strong>
                  </li>
                  <li>
                    <p>{service.description}</p>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => handleOpen(service.id)}
                    >
                      Saiba Mais <AiOutlineArrowRight size={12} />
                    </button>
                  </li>
                </ul>
              </div>
            ),
          )}
        </section>
      </Main>
      {/* Show modal with more inrformation about service */}
      {showModal ? (
        <Modal
          service={selectedService}
          showModal={setShowModal}
          showServiceLink={showServiceLinkOnModal}
        />
      ) : null}
    </>
  );
};

Services.propTypes = {
  limit: PropTypes.number,
  showServiceLinkOnModal: PropTypes.bool,
};

Services.defaultProps = {
  limit: undefined,
  showServiceLinkOnModal: false,
};

export default Services;
