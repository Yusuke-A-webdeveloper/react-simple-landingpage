import styled from 'styled-components';
import Title from './Title';
import { cardList } from '../data';

const Services = () => {
  return (
    <Wrapper id="service">
      <Title title="our" sub="services" />
      <article>
        <div className="card-container">
          {cardList.map((card) => {
            const { id, icon, title, text, img } = card;

            return (
              <div className="card" key={id}>
                <div className="img-con">
                  <img src={img} alt="service one" />
                </div>
                <main>
                  <div>{icon}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </main>
              </div>
            );
          })}
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 80vh;
  .card-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 20px;
    .card {
      width: 350px;
      .img-con {
        position: relative;
        width: 100%;
        height: 200px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      main {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;
        div {
          font-size: 35px;
          color: var(--header);
        }
        h3 {
          color: var(--header2);
          font-size: 25px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        p {
          text-align: justify;
          color: var(--pgraph);
        }
      }
    }
  }
  @media (max-width: 950px) {
    .card-container {
      flex-direction: column;
    }
  }
`;

export default Services;
