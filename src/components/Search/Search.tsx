import styles from "./Search.module.scss";
import React from "react";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFiels = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const submitFormHandler = (
    event: React.FormEvent<HTMLFormElement & FormFiels>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };
  return (
    <form onSubmit={submitFormHandler} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          className={styles.textField}
          type="text"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
