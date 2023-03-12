import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Cartcontext } from "./../../context/index";
import { Container, Main, Wrapper } from "./style";

const Product = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data.reverse().slice(0, 1));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  return (
    <Container>
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <>
            <Wrapper key={index}>
              <Wrapper.Img src={item.image} alt="img" />
              <Main>
                <Wrapper.Text>{item.title}</Wrapper.Text>
                <Wrapper.Desc>
                  {item.description.slice(0, 70) + "..."}
                </Wrapper.Desc>
                <Wrapper.Price>${item.price}</Wrapper.Price>
                <Wrapper.Button
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                  Add to cart
                </Wrapper.Button>
              </Main>
            </Wrapper>
          </>
        );
      })}
    </Container>
  );
};

export default Product;
