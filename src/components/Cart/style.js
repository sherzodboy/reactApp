import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 138px;
  width: 70%;
  margin: auto;
`;

Container.Card = styled.div`
  display: flex;
  border: 1px solid blue;
  justify-content: space-between;
  align-items: center;
`;

Container.Img = styled.img`
  width: 70px;
  height: 70px;
`;

Container.Text = styled.p`
  font-size: 14px;
`;

Container.Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

Container.Button = styled.button`
  width: 50px;
  padding: 5px;
  font-size: 20px;
  background-color: lightGreen;
`;

Container.Text2 = styled.p`
  width: 50px;
  text-align: center;
`;

Container.Remove = styled.h2`
  text-align: center;
  width: 50px;
  font-size: 20px;
  cursor: pointer;
  background-color: red;
`;

export { Container };
