import React, { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  const onChangeInput = e => {
    const value = e.target.value.toLowerCase();
    setValue(value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={css.button}>
          <span> &#128270;</span>
        </button>

        <input
          className={css.input}
          type="text"
          name="value"
          placeholder="Search images and photos"
          value={value}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};