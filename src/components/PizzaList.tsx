import { PizzaBlock } from "./PizzaItem/PizzaItem";
import { PizzaItemSkeleton } from "./PizzaItem/Skeleton";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPizza } from "../store/slices/pizza/asyncAction";

interface IPizzaListProps {
  page: number;
  limitPages: number;
  limitPerPage: number;
}

export const PizzaList: React.FC<IPizzaListProps> = ({ page }) => {
  // редакс
  const { categoryId, sort } = useAppSelector((state) => state.filterReducer);
  const { pizzas, status } = useAppSelector((state) => state.pizza);

  const dispatch = useAppDispatch();

  const getPizzas = () => {
    dispatch(fetchPizza({ categoryId, sort }));
  };
  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort, page]);

  return (
    <>
      {status === "loading"
        ? [
            ...Array(6)
              .fill(null)
              .map((_, i) => <PizzaItemSkeleton key={i} />),
          ]
        : status === "completed"
        ? pizzas?.map((item) => <PizzaBlock item={item} key={item.id} />)
        : ""}
    </>
  );
};
