import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 100px;
  gap: 50px;
`;

const Main = styled.div`
  border: 1px solid silver;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid silver;
`;

Wrapper.Img = styled.img`
  width: 100%;
  max-height: 300px;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;

Wrapper.Text = styled.p`
  color: black;
  font-size: 14px;
`;

Wrapper.Desc = styled.p`
  color: red;
  font-weight: 400;
`;

Wrapper.Price = styled.h3`
  margin: 20px;
  color: green;
  font-size: 14px;
`;

Wrapper.Button = styled.button`
  background-color: green;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  width: 100%;
  :active {
    transform: scale(0.9);
  }
`;

export { Container, Wrapper, Main };
