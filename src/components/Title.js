import styled from 'styled-components';

const Title = ({ title, sub }) => {
  return (
    <Wrapper>
      <h2>
        {title} <span>{sub}</span>
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  h2 {
    font-size: 50px;
    text-transform: uppercase;
    color: var(--hero-bg);
    letter-spacing: 2px;
    span {
      color: var(--header);
    }
  }
  @media (max-width: 414px) {
    h2 {
      font-size: 35px;
    }
  }
`;

export default Title;
