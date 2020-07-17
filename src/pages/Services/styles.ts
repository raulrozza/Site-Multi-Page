import styled from 'styled-components';

import placeholder from '../../assets/img/placeholder.webp';

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-image: url(${placeholder});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000a;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
    width: 90%;
    max-width: 1200px;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 20px;

      strong {
        font-size: 56px;
        text-shadow: 2px 8px 30px rgba(0, 0, 1, 0.5);
        width: 100%;
        font-weight: bold;
        color: var(--primary);
        text-align: center;
      }
      p {
        font-size: 36px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: var(--primary-contrast);
        text-align: center;
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    main {
      section {
        max-width: 80%;
        h1 {
          font-size: 40px;
        }
        p {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    main {
      section {
        max-width: 80%;
        h1 {
          font-size: 40px;
        }
        p {
          font-size: 25px;
        }
      }
    }
  }
`;

export const ServiceWrapper = styled.div`
  padding: 180px 0;
`;
