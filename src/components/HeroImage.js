import styled from 'styled-components';
import heroImg from '../images/hero-image.jpg';
import { socialList } from '../data';

const HeroImage = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={heroImg} alt="hero bg" />
      </div>
      <main className="content">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          saepe!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi
          reprehenderit ex tenetur quo aspernatur aperiam eaque accusamus,
          ducimus quis. Laboriosam sequi molestiae nam debitis repellendus,
          architecto tempore, dolorem, ducimus quia accusantium sapiente
          repellat officiis est delectus natus sint autem.
        </p>
        <a href="#about">learn more</a>
      </main>
      <div className="social-icons">
        <ul>
          {socialList.map((list) => {
            const { id, href, icon } = list;
            return (
              <li key={id}>
                <a href={href}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .img-con {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--hero-bg);
    z-index: -1;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
    }
  }
  main {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h2 {
      color: var(--header);
      font-size: 26px;
      letter-spacing: 1px;
    }
    p {
      color: #fff;
      font-size: 20px;
    }
    a {
      display: inline-block;
      font-size: 20px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 8px 15px;
      color: #fff;
      border: 1px solid;
      transition: 0.3s ease-out;
    }
    a:hover {
      color: var(--header);
      background: #fff;
    }
  }
  .social-icons {
    position: absolute;
    bottom: 0;
    right: 0;
    ul {
      display: flex;
      padding: 20px;
      li {
        list-style: none;
        a {
          text-decoration: none;
          margin: 20px;
          color: #fff;
          font-size: 25px;
          transition: 0.3s ease-out;
        }
        a:hover {
          color: var(--header);
        }
      }
    }
  }
  @media (max-width: 950px) {
    main {
      padding: 50px;
    }
  }
  @media (max-width: 600px) {
    main h2 {
      font-size: 22px;
    }
    main p {
      font-size: 18px;
    }
    main a {
      font-size: 16px;
    }
  }
  @media (max-width: 414px) {
    main {
      padding: 20px;
    }
  }
`;

export default HeroImage;
