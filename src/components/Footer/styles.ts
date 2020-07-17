import styled from 'styled-components';

export const Main = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: var(--text);

  width: 100%;

  h1 {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  p {
    padding-top: 10px;
    width: 100%;
    max-width: 400px;
  }

  footer {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: auto auto auto minmax(40px, 50px);
    grid-template-areas: 'img h1 ul' 'img div ul' 'img div ul' 'credit credit ul';
    grid-gap: 10px;

    width: 100%;
    max-width: 1200px;

    img {
      height: 100%;
      max-height: 400px;

      width: 100%;
      max-height: 500px;

      grid-area: img;
    }

    h1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      grid-area: h1;
    }
    div {
      display: flex;
      flex-direction: column;
      grid-area: div;
      margin-left: 30px;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      grid-area: ul;

      list-style: none;
      a {
        color: var(--text);
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.8;
        }
      }
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      grid-area: credit;

      svg {
        padding: 5px;
        color: var(--text);
      }

      a {
        color: inherit;
        margin-left: 3px;
      }
    }
  }

  @media (max-width: 768px) {
    footer {
      grid-template-areas: 'h1 h1 h1' 'div div div' 'div div div' 'ul ul ul' 'credit credit credit';
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto auto auto 40px 30px;

      img {
        display: none;
      }

      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
      div {
        strong {
          font-size: 16px;
        }
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }
    }
  }
`;
