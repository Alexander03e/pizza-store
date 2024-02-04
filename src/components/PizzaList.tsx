import { PizzaBlock } from "./PizzaItem/PizzaItem";
import { PizzaItemSkeleton } from "./PizzaItem/Skeleton";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPizza } from "../store/slices/pizza/asyncAction";
import { usePizzaSelector } from "../store/slices/pizza/selectors";

interface IPizzaListProps {
  page: number;
  limitPages: number;
  limitPerPage: number;
}

export const PizzaList: React.FC<IPizzaListProps> = ({ page }) => {
  // редакс
  const { categoryId, sort, searchValue } = useAppSelector(
    (state) => state.filterReducer
  );
  const { pizzas, status } = usePizzaSelector();
  const dispatch = useAppDispatch();
  const getPizzas = () => {
    dispatch(fetchPizza({ categoryId, sort, searchValue }));
  };
  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort, page, searchValue]);

  return (
    <>
      {status === "loading" ? (
        [
          ...Array(6)
            .fill(null)
            .map((_, i) => <PizzaItemSkeleton key={i} />),
        ]
      ) : status === "completed" ? (
        pizzas?.map((item) => <PizzaBlock item={item} key={item.id} />)
      ) : status === "error" ? (
        <h1>Извините, пиццы не найдены</h1>
      ) : (
        ""
      )}
    </>
  );
};
