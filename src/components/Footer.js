import styled from 'styled-components';
import { menuList } from '../data';

const Footer = () => {
  return (
    <Wrapper>
      <ul>
        {menuList.map((list) => {
          const { id, href, title } = list;
          return (
            <li key={id}>
              <a href={href}>{title}</a>
            </li>
          );
        })}
      </ul>
      <p>Copy right JPENwebdeveloper. All Right Reserved</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  background: var(--header2);
  ul {
    padding: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      a {
        margin: 20px;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 20px;
      }
    }
  }
  p {
    text-align: center;
    color: #fff;
    font-size: 14px;
    padding: 15px;
  }
  @media (max-width: 414px) {
    ul li a {
      margin: 10px;
      font-size: 17px;
    }
  }
`;

export default Footer;
