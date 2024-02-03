import { IPizza } from "../App";
import { PizzaBlock } from "./PizzaItem/PizzaItem";
import { PizzaItemSkeleton } from "./PizzaItem/Skeleton";
import React from "react";
import axios from "axios";
import { useAppSelector } from "../store/hooks";
import { Pagination } from "./Pagination/Pagination";
import ReactPaginate from "react-paginate";

interface IPizzaListProps {
  page: number;
  limitPages: number;
  limitPerPage: number;
}

export const PizzaList: React.FC<IPizzaListProps> = ({
  page,
  limitPages,
  limitPerPage,
}) => {
  const [pizzas, setPizzas] = React.useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // редакс
  const { categoryId, sort } = useAppSelector((state) => state.filterReducer);

  const getAllPizzas = async () => {
    try {
      await axios
        // .get(
        //   `https://65b2cba49bfb12f6eafe6e08.mockapi.io/items?${
        //     categoryId !== 0 ? `category=${categoryId}&` : ""
        //   }limit=${limitPerPage}&page=${page}&sortBy=${
        //     sort.sortProperty
        //   }&order=asc`
        // )
        .get(
          `https://65b2cba49bfb12f6eafe6e08.mockapi.io/items?${
            categoryId !== 0 ? `category=${categoryId}&` : ""
          }&sortBy=${sort.sortProperty}&order=asc`
        )
        .then((res) => (setPizzas(res.data), setIsLoading(false)));
      // .then(() => isLoading(false));
      window.scrollTo(0, 0);
    } catch (e) {
      console.log(e);
    }
  };
  const [sorted, setSorted] = React.useState<any>();
  const state = useAppSelector((state) => state.filterReducer);
  React.useEffect(() => {
    setIsLoading(true);
    getAllPizzas();
  }, [categoryId, sort, page]);

  return (
    <>
      {isLoading
        ? [
            ...Array(6)
              .fill(null)
              .map((_, i) => <PizzaItemSkeleton key={i} />),
          ]
        : pizzas.map((item) => <PizzaBlock item={item} key={item.id}/>)}
    </>
  );
};
