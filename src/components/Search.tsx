import React from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../store/slices/filter/slice";
import { useAppDispatch } from "../store/hooks";

export const Search: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const searchDebounce = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchDebounce(e.currentTarget.value);
  };

  return (
    <div className="header__search">
      <input
        ref={inputRef}
        type="text"
        className="header__search-field"
        placeholder="Поиск пиццы..."
        onChange={changeInput}
      />
    </div>
  );
};
