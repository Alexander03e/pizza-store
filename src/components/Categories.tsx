import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCategoryId } from "../store/slices/filter/slice";

export const Categories: React.FC = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeCategory, setActiveCategory] = React.useState(0);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.filterReducer);

  const changeCategory = (i: number) => {
    setActiveCategory(i);
    dispatch(setCategoryId(i));
  };
  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((category, i) => (
            <li
              className={state.categoryId === i ? "active" : ""}
              onClick={() => changeCategory(i)}
              key={i}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
