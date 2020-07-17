import styled, { css } from 'styled-components';

export const CarouselContainer = styled.div`
  main {
    height: 100vh;
    width: 100%;
    position: relative;

    ul.contact-items {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      list-style: none;
      height: 100%;
      position: absolute;
      z-index: 20;
      padding: 0 36px;

      li {
        & + li {
          margin-top: 30px;
        }

        a {
          color: var(--primary-contrast);

          &:hover {
            color: var(--primary-contrast-shade);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    main {
      ul.contact-items {
        padding: 0 24px;
      }
    }
  }

  @media (max-width: 440px) {
    main {
      ul.contact-items {
        padding: 0 18px;
      }
    }
  }
`;

interface CarouselProps {
  image: string;
}

export const CarouselImage = styled.div<CarouselProps>`
  ${(props) =>
    css`
      background-image: url(${props.image});
    `}

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .cover {
    width: inherit;
    height: inherit;
    background-color: #0009;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 108px;
  }

  p {
    font-size: 50px;
    color: var(--primary-contrast);
  }

  button {
    background: var(--primary-contrast);
    color: var(--text);
    font-size: 16px;
    font-weight: bold;

    border-radius: 5px !important;
    border: 4px;
    border-color: var(--primary);
    border-style: solid;
    box-shadow: 3px 3px 7px 0 rgb(137, 132, 118);

    margin: 5px;
    padding: 10px;

    cursor: pointer;

    & + button {
      margin-left: 100px;
    }

    transition: background-color 0.2s;

    &:hover {
      background: var(--transparent-bg);
      color: var(--primary-contrast);
    }
  }

  /* Responsiviness */
  @media (max-width: 768px) {
    .cover {
      padding: 0 48px 0 80px;
    }

    p {
      font-size: 40px;
    }
  }

  @media (max-width: 520px) {
    .cover {
      padding: 0 40px 0 72px;
    }

    p {
      font-size: 32px;
    }
  }

  @media (max-width: 440px) {
    p {
      font-size: 24px;
    }
  }
`;

export const About = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  p {
    width: 100%;
    font-size: 26px;
    text-align: center;
  }

  div {
    display: flex;
    align-content: center;
    width: 100%;

    a {
      text-decoration: none;
      display: flex;
      align-content: center;
      justify-content: center;
      width: 50%;
      button {
        border-radius: 5px;
        border: 4px;
        border-color: var(--primary);
        border-style: solid;
        box-shadow: 3px 3px 7px 0 rgb(137, 132, 118);
        cursor: pointer;
        font-size: 20px;
        margin: 5px;
        padding: 15px;

        background: var(--primary-contrast);
        color: var(--text);

        transition: background-color 0.2s;

        & + button {
          margin-left: 100px;
        }

        &:hover {
          background: var(--transparent-bg);
        }
      }
    }
  }

  @media (max-width: 768px) {
    p {
      padding: 10px;
    }
  }
`;

export const Info = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    picture {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      max-height: 360px;
    }

    p {
      font-size: 26px;
      text-align: center;
      margin-bottom: 180px;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      list-style: none;
      width: 100%;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 45%;
        strong {
          font-size: 50px;
          color: var(--primary);
          font-weight: bold;
        }

        span {
          font-weight: bold;
          color: var(--primary-very-dark);
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 990px) {
    div {
      p {
        margin-bottom: 96px;
      }
    }
  }

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    padding: 0 36px;

    div {
      img {
        max-width: 80%;
        max-height: 280px;
        margin-bottom: 8px;
      }

      p {
        margin-bottom: 80px;
      }
    }
  }
`;
