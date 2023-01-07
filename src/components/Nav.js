import styled from 'styled-components';
import { menuList } from '../data';
import { AiOutlineMenu } from 'react-icons/ai';

const Nav = ({ toggle }) => {
  return (
    <Wrapper>
      <div className="logo">
        <h1>sample</h1>
      </div>

      <ul>
        {menuList.map((list) => {
          const { id, title, href } = list;
          return (
            <li key={id}>
              <a href={href}>{title}</a>
            </li>
          );
        })}
      </ul>
      <div className="hiddenIcon" onClick={() => toggle()}>
        <AiOutlineMenu />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  h1 {
    font-size: 35px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--header);
  }
  ul {
    display: flex;
    li {
      list-style: none;
      a {
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px;
        font-size: 20px;
        letter-spacing: 1px;
        color: #fff;
        transition: 0.3s ease-out;
      }
      a:hover {
        color: var(--header);
      }
    }
  }
  .hiddenIcon {
    display: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }
  @media (max-width: 950px) {
    ul {
      display: none;
    }
    .hiddenIcon {
      display: block;
    }
  }
`;

export default Nav;
