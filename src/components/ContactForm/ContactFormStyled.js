import styled from "styled-components";

const Form = styled.form`
  padding: 10px;
  margin-bottom: 50px;
  border: 1px dotted orange;

  .label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: honeydew;
    font-size: 22px;
    font-weight: 700;
  }

  .input {
    margin-top: 20px;
    padding: 10px;
    width: 250px;
    height: 35px;
    color: black;
    font-size: 16px;
    font-style: italic;
  }

  .submitBtn {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    min-width: 80px;
    height: 25px;
    outline: none;
    border-radius: 4px;
    border-bottom: solid 1px #d6d6d6;
    background-color: honeydew;
    color: black;
    font-weight: 700;
    font-size: 14px;

    &:hover {
      cursor: pointer;
    }
    &:active {
      background-color: springgreen;
    }
  }
`;

export default Form;
