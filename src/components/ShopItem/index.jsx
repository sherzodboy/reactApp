import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Cartcontext } from "./../../context/index";
import { Container, Wrapper, Main } from "./style";
import { useNavigate } from "react-router-dom";

const ShopItem = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data.reverse().slice(0, 9));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  const navigate = useNavigate();
  const ProductClick = () => {
    navigate("/product");
  };

  return (
    <Container>
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <>
            <Wrapper key={index}>
              <Wrapper.Img src={item.image} alt="img" onClick={ProductClick} />
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

export default ShopItem;
