import { Container } from "./style";
import Shop from "./../Shop/index";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return <Container>{loading ? <Loader /> : <Shop />}</Container>;
};

export default Home;
