import styled from "styled-components";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .h1Title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 46px;
    color: honeydew;
  }

  .h2Title {
    margin-bottom: 30px;
    font-size: 32px;
    color: honeydew;
  }

  .text {
    font-size: 18px;
    font-style: italic;
    color: salmon;
  }
`;

export default Container;
