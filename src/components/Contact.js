import styled from 'styled-components';
import Title from './Title';

const contact = () => {
  return (
    <Wrapper id="contact">
      <Title title="contact" sub="us" />
      <div className="form-container">
        <form className="form">
          <input className="input-field" type="text" placeholder="your name" />
          <input
            className="input-field"
            type="email"
            placeholder="your email"
          />
          <input
            className="input-field"
            type="subject"
            placeholder="subject here"
          />
          <textarea></textarea>
          <input
            type="submit"
            className="submit"
            onClick={(e) => e.preventDefault()}
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  .form-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    form {
      width: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      .input-field,
      textarea {
        width: 100%;
        padding: 5px 10px;
        font-size: 18px;
      }
      textarea {
        height: 250px;
        resize: none;
      }
      .submit {
        display: inline-block;
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 8px 15px;
        background: #fff;
        color: var(--header2);
        border: 1px solid;
        cursor: pointer;
        transition: 0.3s ease-out;
        :hover {
          color: #fff;
          background: var(--header2);
        }
      }
    }
  }
`;

export default contact;
