import styled from 'styled-components';

import placeholder from '../../assets/img/placeholder.webp';

export const Cover = styled.div`
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
  position: center;

  div {
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

  @media (max-width: 768px) {
    div {
      max-width: 80%;
      strong {
        font-size: 40px;
      }
      p {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 540px) {
    div {
      max-width: 80%;
      strong {
        font-size: 40px;
      }
      p {
        font-size: 25px;
      }
    }
  }
`;
export const About = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 110vh;
  width: 100%;

  p {
    width: 100%;
    font-size: 56px;
    text-align: center;
    color: var(--primary);
  }

  /* Responsividade */
  @media (max-width: 768px) {
    p {
      max-width: 80%;
      font-size: 40px;
    }
  }

  @media (max-width: 540px) {
    p {
      max-width: 80%;
      font-size: 30px;
    }
  }
`;

export const Clients = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-bottom: 90px;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1200px;

    div {
      display: grid;
      grid-template-columns: 2fr 2fr;
      grid-gap: 30px;
      margin-bottom: 30px;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        background-color: var(--primary);
        position: relative;
        max-height: 300px;
        max-width: 500px;
        overflow: hidden;

        p {
          position: absolute;
          text-align: center;
          font-size: 20px;
          color: #eee;
          min-height: 48px;
          width: 100%;
          bottom: 0;
          background-color: #000a;
          margin-bottom: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;

        strong {
          padding: 5px;
          font-size: 50px;
          color: var(--primary);
          margin-bottom: 20px;
          font-weight: bold;
          text-transform: uppercase;
        }

        p {
          padding: 20px;
          margin-top: 50px;
          text-align: center;
          font-size: 20px;
          color: var(--text-light);
        }
      }

      :nth-child(2n) {
        section {
          order: 1;
        }

        ul {
          order: 0;
        }
      }
    }
  }

  @media (max-width: 750px) {
    main {
      div {
        display: flex;
        flex-direction: column;
        align-items: center;

        section {
          max-height: 300px;
          max-width: 300px;
          margin-bottom: 18px;
          img {
            height: 100%;
            width: 100%;
            order: 0;
          }

          p {
            font-size: 15px;
          }
        }

        ul {
          align-items: center;
          justify-content: center;
          order: 1;

          strong {
            margin-bottom: 0px;
            font-size: 35px;
          }

          p {
            margin-top: 0px;
            font-size: 18px;
          }
        }

        :nth-child(2n) {
          section {
            order: 0;
          }
        }
      }
    }
  }
`;
