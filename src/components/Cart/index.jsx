import { useContext } from "react";
import { Cartcontext } from "./../../context/index";
import { Container } from "./style";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Container>
      {state.map((item, index) => {
        return (
          <Container.Card key={index}>
            <Container.Img src={item.image} alt="img" />
            <Container.Text>{item.title}</Container.Text>
            <Container.Text>{item.quantity * item.price}</Container.Text>
            <Container.Quantity>
              <Container.Button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </Container.Button>
              <Container.Text2>{item.quantity}</Container.Text2>
              <Container.Button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              >
                -
              </Container.Button>
            </Container.Quantity>
            <Container.Remove
              onClick={() => dispatch({ type: "REMOVE", payload: item })}
            >
              x
            </Container.Remove>
          </Container.Card>
        );
      })}
      {state.length > 0 ? (
        <div className="total">
          <h2>{total} total price</h2>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          There are no products in the cart !!!
        </h1>
      )}
    </Container>
  );
};

export default Cart;
