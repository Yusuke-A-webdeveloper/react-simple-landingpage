import styled from 'styled-components';
import aboutImg from '../images/about.jpg';
import Title from './Title';

const About = () => {
  return (
    <Wrapper id="about">
      <Title title="about" sub="us" />
      <main>
        <div className="img-con">
          <img src={aboutImg} alt="about main" />
        </div>
        <article>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            inventore perferendis illum eos quasi consequuntur modi animi,
            adipisci ducimus! Similique.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed
            laboriosam doloribus accusamus quod cum facere odio soluta inventore
            id?
          </p>
        </article>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    .img-con {
      position: relative;
      height: 600px;
      width: 50%;
      img {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
        height: 350px;
        width: 450px;
        object-fit: cover;
        z-index: 2;
      }
      ::after {
        content: '';
        position: absolute;
        top: 45%;
        right: 15px;
        transform: translate(0, -50%);
        height: 350px;
        width: 450px;
        border: 10px solid var(--hero-bg);
      }
    }
    article {
      width: 50%;
      padding: 50px;
      h3 {
        font-size: 30px;
        letter-spacing: 1px;
        text-transform: capitalize;
        color: var(--header2);
        margin-bottom: 20px;
      }
      p {
        color: var(--pgraph);
      }
    }
  }
  @media (max-width: 950px) {
    main {
      flex-direction: column;
    }
    main .img-con {
      height: 400px;
      margin-top: 50px;
    }
    main article {
      width: 100%;
      padding: 20px 150px;
    }
  }
  @media (max-width: 700px) {
    main .img-con {
      margin-top: 0px;
    }
    main .img-con img {
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 250px;
      width: 350px;
    }
    main .img-con::after {
      display: none;
    }
  }
  @media (max-width: 600px) {
    main article {
      padding: 20px 30px;
    }
  }
`;

export default About;
