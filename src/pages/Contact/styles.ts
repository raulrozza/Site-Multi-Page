import styled, { css } from 'styled-components';

interface FormProps {
  hasErrorName: boolean;
  hasErrorEmail: boolean;
  hasErrorPhone: boolean;
  hasErrorHowMeet: boolean;
}

export const FormStyle = styled.div<FormProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--background);

  padding: 30px;

  main {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-auto-columns: 1fr 40%;
    grid-auto-rows: auto;
    grid-template-areas: 'section form';
    margin-top: 90px;

    section {
      grid-area: section;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      p {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        width: 90%;
      }

      img {
        max-width: 400px;
      }
    }
    form {
      grid-area: form;
      background: var(--primary-contrast);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-radius: 10px;
      box-shadow: 2px 2px 5px 0 rgb(137, 132, 118);

      header {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;

        justify-content: center;
        background: var(--primary);
        color: var(--text);
        border-radius: 10px;

        strong {
          font-size: 25px;
          text-align: center;
          margin: 30px;
        }

        span {
          font-size: 18px;
          text-align: center;
          margin-bottom: 30px;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 20px;
        width: 90%;
        color: var(--primary);

        .input {
          width: 100%;
          padding: 12px;
          margin-bottom: 30px;
          border-radius: 3px;
          background-color: var(--input);
          border: none;
          box-shadow: 2px 2px 5px 0 rgb(137, 132, 118);
          transition: background-color 0.2s;

          &:focus {
            background-color: var(--input-focus);
          }
        }

        .name {
          ${(props) =>
            props.hasErrorName &&
            css`
              border-radius: 3px;
              border-color: #c53030;
              box-shadow: 2px 2px 5px 0 rgb(197, 48, 48);
            `}
        }

        .email {
          ${(props) =>
            props.hasErrorEmail &&
            css`
              border-radius: 3px;
              border-color: #c53030;
              box-shadow: 2px 2px 5px 0 rgb(197, 48, 48);
            `}
        }

        .phone {
          ${(props) =>
            props.hasErrorPhone &&
            css`
              border-radius: 3px;
              border-color: #c53030;
              box-shadow: 2px 2px 5px 0 rgb(197, 48, 48);
            `}
        }

        textarea {
          height: 100px;
          resize: none;
        }

        select {
          ${(props) =>
            props.hasErrorHowMeet &&
            css`
              border-radius: 3px;
              border-color: #c53030;
              box-shadow: 2px 2px 5px 0 rgb(197, 48, 48);
            `}
        }
        span {
          margin-bottom: 5px;
        }
      }
      button {
        background: var(--primary-contrast);
        color: var(--text);
        font-size: 20px;

        border-radius: 5px;
        border: 4px;
        border-color: var(--primary);
        border-style: solid;
        box-shadow: 3px 3px 7px 0 rgb(137, 132, 118);

        margin: 5px;
        margin-bottom: 15px;

        padding: 10px;

        transition: background-color 0.2s;

        :disabled {
          opacity: 0.4;
        }

        &:hover:not(:disabled) {
          background: rgba(117, 117, 117, 0.1);
        }

        &.sent {
          background: rgba(100, 255, 100, 0.3);
        }

        &.error {
          background: rgba(255, 100, 100, 0.3);
        }
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    main {
      grid-auto-columns: auto;
      grid-auto-rows: auto auto;
      grid-template-areas: 'section' 'form';

      section {
        p {
          max-width: 80%;
          font-size: 20px;
          text-align: center;
        }

        img {
          max-width: 250px;
        }

        button {
          font-size: 15px;
        }
      }

      form {
        margin-top: 12px;
        grid-area: form;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 10px;
        box-shadow: 2px 2px 5px 0 rgb(137, 132, 118);

        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px;
          width: 100%;

          justify-content: center;
          border-radius: 10px;

          strong {
            font-size: 19px;
            text-align: center;
            margin: 30px;
          }

          span {
            font-size: 13px;
            text-align: center;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
`;
