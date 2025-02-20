import { FC } from 'react';
import style from '@/_styles/header.module.css';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;