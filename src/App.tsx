import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PizzaBlock } from "./components/PizzaItem/PizzaItem";
import { PizzaList } from "./components/PizzaList";
import { Sort } from "./components/Sort";
import "./scss/app.scss";
import axios from "axios";
import React from "react";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Cart } from "./pages/Cart";
import { MainRoutes } from "./routes/MainRoutes";

export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <MainRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
