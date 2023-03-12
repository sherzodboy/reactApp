import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "./../utils/navbar";
import Navbar from "./../components/Navbar/index";

const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          {navbar.map(({ path, element, id }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/cart" element={<Navigate to={"/cart"} />} />
        <Route path="/product" element={<Navigate to={"/product"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
