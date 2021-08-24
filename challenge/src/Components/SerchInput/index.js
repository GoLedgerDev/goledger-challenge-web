import React from 'react';
import styles from './Style';

const SearchInput = ({
  type,
  icon,
  setWord,
}) => (
  <div style={styles.search}>
    <div style={styles.icon}>
      {icon}
    </div>

    <input type={type} placeholder="Pesquisar..." style={styles.generic} onChange={(word) => setWord(word.target.value)} />
  </div>
);

export default SearchInput;