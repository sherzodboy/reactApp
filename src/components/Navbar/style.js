import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 1px 20px #8a2be2;
  z-index: 11111111;
  position: fixed;
  height: 70px;
  width: 100%;
  .logo {
    color: #8a2be2;
    font-size: 20px;
    cursor: pointer;
    margin-left: 100px;
  }
  .cart {
    cursor: pointer;
    margin-right: 100px;
  }
`;

export { Container };
