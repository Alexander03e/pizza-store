import React from "react";

export const Search: React.FC = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="header__search">
      <input
        ref={inputRef}
        type="text"
        className="header__search-field"
        placeholder="Поиск пиццы..."
        onChange={changeInput}
        value={value}
      />
    </div>
  );
};
