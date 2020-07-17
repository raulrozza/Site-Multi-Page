import styled from 'styled-components';

interface Props {
  image: string;
}

export const StyledModal = styled.div<Props>`
  /* The Modal (background) */
  .overlay {
    display: grid; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 100; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    overflow: auto;
  }

  /* Modal Content */
  .modal-content {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 2fr auto;
    grid-template-areas: 'img title close' 'img parag parag' 'button button button';
    grid-gap: 30px;

    background-color: var(--modal-background);
    margin: auto;

    padding: 20px 0 20px 0;
    padding-right: 0px;
    border: 1px solid var(--modal-item);
    width: 80vw;
    max-width: 1200px;
    z-index: 3; /* Sit on top */
    overflow: auto;

    .close {
      height: 100%;
      padding-right: 10px;
      cursor: pointer;

      button {
        background: transparent;
        color: var(--text);
        border-radius: 3px;
        border: 0px;
        border-color: var(--primary);
        border-style: solid;
        transition: background-color 0.3s;

        &:hover {
          background: var(--transparent-bg);
        }
      }

      grid-area: close;
    }

    section {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-area: img;
      display: flex;

      div {
        background-image: url(${(props) => props.image});
        background-size: cover;
        height: 300px;
        width: 300px;

        border-radius: 50%;
      }
    }

    strong {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      font-size: 30px;
      color: var(--primary);
      margin-bottom: 20px;
      font-weight: bold;

      grid-area: title;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 15px;

      p {
        font-size: 16px;
        color: var(--text-light);
        text-align: justify;
      }

      grid-area: parag;
    }

    .link-container {
      grid-area: button;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      a {
        background: var(--primary-contrast);
        color: var(--text);
        font-size: 20px;
        text-decoration: none;

        border-radius: 5px;
        border: 4px;
        border-color: var(--primary);
        border-style: solid;
        box-shadow: 3px 3px 7px 0 rgb(137, 132, 118);

        margin: 5px;

        padding: 10px;

        & + button {
          margin-left: 100px;
        }

        transition: background-color 0.2s;

        &:hover {
          background: var(--transparent-bg);
        }
      }
    }

    @media (max-width: 769px) {
      width: 90vw;
      grid-template-columns: auto;
      grid-template-areas: 'close close' 'img img' 'title title' 'parag parag' 'button button';
      grid-gap: 15px;

      .close {
        display: flex;
        justify-content: flex-end;
        font-size: 30px;
        color: var(--text);
      }

      section {
        img {
          height: 200px;
          width: 200px;

          border-radius: 50%;
        }
      }

      strong {
        font-size: 25px;
      }

      .paragrafoModal {
        width: 90vw;
        font-size: 16px;
      }

      .divButton {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
          font-size: 16px;
          margin-left: 0px;
          & + button {
            margin-left: 0px;
          }
        }
      }
    }
  }
`;
