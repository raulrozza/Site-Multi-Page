import styled from 'styled-components';

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, minmax(200px, 300px));

    width: 100%;
    max-width: 1200px;
    grid-gap: 100px;

    div {
      display: grid;
      grid-template-columns: 2fr 2fr;
      grid-gap: 30px;

      section {
        display: flex;
        flex-direction: row;

        img {
          height: 100%;
          max-height: 300px;

          width: 100%;
          max-width: 500px;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        list-style: none;

        strong {
          padding: 5px;
          font-size: 30px;
          color: var(--primary);
          margin-bottom: 20px;
          font-weight: bold;
          text-align: justify;
          text-transform: uppercase;
        }

        p {
          padding: 5px;
          max-width: 600px;
          font-size: 20px;
          color: var(--text-light);
          text-align: justify;
        }

        button {
          background: var(--primary-contrast);
          color: var(--primary);
          text-decoration: none;
          padding: 5px;
          transition: background-color 0.2s;
          border-radius: 5px;
          border: 4px;
          border-color: var(--primary-contrast);
          border-style: solid;
          cursor: pointer;

          &:hover {
            background: var(--transparent-bg);
            border-radius: 5px;
            border: 4px;
            border-color: var(--primary);
            border-style: solid;
            box-shadow: 3px 3px 7px 0 rgb(137, 132, 118);
          }
          font-size: 17px;

          svg {
            margin-left: auto;
            color: var(--primary);
          }

          &:hover {
            color: var(--primary-dark);
          }
        }
      }

      &:nth-child(2n) {
        section {
          align-items: flex-end;
          justify-content: flex-end;
          order: 1;
        }

        ul {
          order: 0;
        }
      }
    }
  }

  @media (max-width: 750px) {
    section {
      grid-template-rows: auto;
      grid-gap: 0px;

      div {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0px;

        img {
          padding: 10px;
          height: 100%;
          max-height: 300px;

          width: 100%;
          max-width: 300px;

          order: 0;
        }

        ul {
          padding: 10px;
          order: 1;

          strong {
            font-size: 23px;
          }

          p {
            font-size: 18px;
          }
        }

        &:nth-child(2n) {
          section {
            align-items: flex-end !important;
            justify-content: flex-end !important;
            order: 0;
          }
        }
      }
    }
  }
`;
