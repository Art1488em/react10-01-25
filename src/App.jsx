
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import React from "react";
import { useAppContext } from "./context";

const App = () => {
  const { isCard1, isCard2, toggleOpen1, toggleOpen2 } = useAppContext();

  return (
    <>
      {isCard1 ? (
        <Product
          image={"/moto-11.png"}
          price="$107.990,00"
          oldprice="$119.090.00"
        />
      ) : null}
      {isCard2 ? (
        <Product
          image={"/moto-22.png"}
          price="$101.990,00"
          oldprice="$112.090.00"
        />
      ) : null}

      <Header />
    </>
  );
};

export default App;
