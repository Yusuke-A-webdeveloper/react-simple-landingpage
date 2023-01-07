import { useState } from 'react';
import HeroImage from './HeroImage';
import Nav from './Nav';
import styled from 'styled-components';
import { menuList } from '../data';

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    return setShowMenu(!showMenu);
  };

  return (
    <Wrapper id="home">
      <Nav toggle={toggle} />
      <HeroImage />

      <ul className={showMenu ? 'hiddenMenu showMenu' : 'hiddenMenu'}>
        {menuList.map((list) => {
          const { id, title, href } = list;
          return (
            <li key={id}>
              <a href={href}>{title}</a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .hiddenMenu {
    position: absolute;
    top: 0;
    left: -30%;
    width: 30%;
    height: 100%;
    background: var(--header2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.3s ease-out;
    z-index: 101;
    li {
      list-style: none;
      margin: 20px;
      a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 25px;
        transition: 0.3s ease-out;
        :hover {
          color: var(--header);
        }
      }
    }
  }
  .hiddenMenu.showMenu {
    left: 0;
  }
  @media (max-width: 600px) {
    .hiddenMenu li a {
      font-size: 18px;
    }
  }
`;

export default Hero;
