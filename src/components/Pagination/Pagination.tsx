import styles from "./Pagination.module.scss";
import React from "react";

interface PaginationProps {
  page: number;
  setPage: any;
  limitPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  limitPages,
}) => {
  const paginationBack = () => {
    setPage((prev: number) => prev - 1);
  };
  const paginationForward = () => {
    setPage((prev: number) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={paginationBack} disabled={page === 1}>
        <h2>назад</h2>
      </button>
      <h2>-{page}-</h2>
      <button onClick={paginationForward} disabled={page === limitPages}>
        <h2>вперед</h2>
      </button>
    </div>
  );
};
