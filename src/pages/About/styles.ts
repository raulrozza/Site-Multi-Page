import styled from 'styled-components';

import placeholder from '../../assets/img/placeholder.webp';

export const Cover = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  background-image: url(${placeholder});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: center;

  height: 100vh;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000a;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 90%;
    max-width: 980px;

    strong {
      padding: 5px;
      font-size: 56px;
      color: var(--primary);
      font-weight: bold;
      text-align: center;
      padding-bottom: 20px;
    }

    p {
      font-size: 36px;
      color: var(--primary-contrast);
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    div {
      strong {
        font-size: 40px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 540px) {
    div {
      max-width: 100%;
      strong {
        font-size: 35px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;

export const Purpose = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  main {
    display: grid;
    grid-template-columns: 3fr;
    grid-template-rows: auto auto;
    grid-gap: 30px;
    width: 100%;
    max-width: 980px;

    strong {
      padding: 5px;
      font-size: 56px;
      color: var(--primary);
      margin-bottom: 20px;
      font-weight: bold;
      text-align: center;
    }
    p {
      width: 100%;
      font-size: 26px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    main {
      width: 95%;
      p {
        font-size: 18px;
        align-content: center;
        justify-content: center;
      }
      strong {
        font-size: 36px;
      }
    }
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 90%;
    max-width: 1200px;
    margin-bottom: 30px;

    > div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
      grid-template-rows: repeat(auto-fit, 1fr);
      grid-gap: 30px;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 768px) {
    main {
      div {
        grid-gap: 25px;
      }
    }
  }
`;

export const InfoItem = styled.div`
  border-radius: 10px;
  border-style: solid;
  border-color: var(--primary);
  display: grid;
  grid-template-rows: 1fr 1fr 3fr;
  text-align: center;
  padding: 8px;
  height: 100%;

  svg {
    color: var(--text);
    justify-self: center;
  }

  strong {
    font-size: 30px;
    color: var(--text);
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 20px;
    color: var(--text-light);
    text-align: center;
  }

  :hover {
    box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    div {
      strong {
        font-size: 25px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

export const Team = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  main {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 100px auto;
    align-items: center;
    min-height: 80%;
    width: 90%;
    max-width: 1200px;
    h1 {
      font-size: 64px;
      color: var(--primary);
      text-align: center;
      font-weight: bold;
    }

    section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
      align-items: center;
      justify-content: center;
      padding-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    main {
      h1 {
        font-size: 40px;
      }
      section {
        grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
      }
    }
  }
`;

interface TeamItemProps {
  src: string;
}

export const TeamItem = styled.div<TeamItemProps>`
  position: relative;
  padding: 10px;
  height: 200px;

  .image {
    border-radius: 5px;
    border: 3px;
    border-color: var(--primary);
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position-y: center;
    border-style: solid;
    box-shadow: 3px 3px 7px 0 rgb(137, 132, 118);

    height: 100%;
    max-height: 200px;
    width: 100%;
    max-width: 200px;
  }

  .overlay {
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 100%;
    right: 0;
    background-color: var(--primary);
    color: var(--text);
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: 0.5s ease;
  }

  span {
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  strong {
    text-align: center;
    align-items: justify;
    font-size: 24px;
  }

  &:hover .overlay {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    .image {
      height: 100%;
      max-height: 150px;
      width: 100%;
      max-width: 150px;
    }
    p {
      font-size: 16px;
      align-content: center;
      justify-content: center;
      padding: 0px;
    }

    strong {
      font-size: 18px;
    }
  }
`;
