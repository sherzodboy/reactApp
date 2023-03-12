import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/");
  };
  const cartClick = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <div onClick={logoClick} className="logo">
        Product App
      </div>
      <div onClick={cartClick} className="cart">
        Cart
      </div>
    </Container>
  );
};

export default Navbar;
