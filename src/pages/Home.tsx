import { Categories } from "../components/Categories";
import { PizzaList } from "../components/PizzaList";
import { Sort } from "../components/Sort";

export const Home = () => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaList />
      </div>
    </>
  );
};
