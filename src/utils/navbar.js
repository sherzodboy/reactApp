import Cart from "../components/Cart";
import Home from "./../components/Home/index";
import Product from "./../components/Product/index";

export const navbar = [
  {
    element: <Home />,
    title: "Home",
    path: "/home",
  },
  {
    element: <Cart />,
    title: "Cart",
    path: "/cart",
  },
  {
    element: <Product />,
    title: "Product",
    path: "/product",
  },
];

export default navbar;
