import React from "react";
import { Categories } from "../components/Categories";
import { Pagination } from "../components/Pagination/Pagination";
import { PizzaList } from "../components/PizzaList";
import { Sort } from "../components/Sort";

export const Home = () => {
  const [page, setPage] = React.useState<number>(1);
  const LIMIT_PAGES = 3;
  const LIMIT_PER_PAGE = 4;

  // React.useEffect(() => {});

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaList
          limitPerPage={LIMIT_PER_PAGE}
          page={page}
          limitPages={LIMIT_PAGES}
        />
      </div>
      {/* <Pagination setPage={setPage} page={page} limitPages={LIMIT_PAGES} /> */}
    </>
  );
};
