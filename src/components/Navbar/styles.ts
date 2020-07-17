import styled from 'styled-components';

export const Navbar = styled.div`
  background: var(--navbar-bg);
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 5;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    img {
      margin-top: 10px;
      padding-right: 100px;
    }
    nav {
      ul {
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-evenly;

        margin: auto;

        li {
          font-size: 16px;

          & + li {
            margin-left: 50px;
          }
          a {
            color: var(--primary-very-dark);
            text-decoration: none;
            transition: color 0.2s;
            &:hover {
              color: var(--primary);
            }
          }

          button {
            width: 195px;
            height: 45px;
            background: var(--primary);
            border-radius: 15px;
            border: 0;
            color: var(--text);
            font-size: 20px;
            font-weight: bold;

            transition: background-color 0.2s;

            &:hover {
              background: var(--primary-dark);
            }

            svg {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1205px) {
    nav {
      display: none;
    }
    img {
      margin-left: 20px;
    }

    .one,
    .two,
    .three {
      background-color: var(--text);
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 30px;
      height: 30px;
      margin: 10px 10px 0 0;
      border: none;
      background: transparent;
      outline: none;
    }

    /* fullscreen */
    .menu-section.on {
      position: absolute;
      top: 0;
      right: 0;

      width: 20vw;
      height: 100vh;

      background: var(--primary-contrast);

      z-index: 10;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .menu-section.on nav {
      display: block;
      width: 100%;
    }

    .menu-section.on .menu-toggle {
      position: absolute;
      right: 0px;
      top: 5px;
    }

    .menu-section.on .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.on .menu-toggle .two {
      opacity: 0;
    }

    .menu-section.on .menu-toggle .three {
      transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.on nav ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 50px;
    }

    .menu-section.on nav ul li {
      margin-left: 0px;
      margin-top: 10px;
      height: 30px;
      width: 100%;

      &:hover {
        color: var(--primary);
      }
    }

    .menu-section.on button {
      height: 30px;
      border-radius: 5px;
    }

    .menu-section.on nav ul a {
      transition-duration: 0.5s;
      display: block;
      margin: 5px 0 0 10px;
    }
  }

  @media (max-width: 990px) {
    .menu-section.on {
      width: 25vw;
    }
  }

  @media (max-width: 800px) {
    .menu-section.on {
      width: 30vw;
    }
  }

  @media (max-width: 800px) {
    .menu-section.on {
      width: 50vw;
    }
  }

  @media (max-width: 330px) {
    img {
      width: 80%;
    }
    .menu-section.on li button {
      width: 150px;
      font-size: 13px;
    }
  }
`;
