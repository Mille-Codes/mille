import { FC } from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggleBtn';
import styles from '@/_styles/Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <ThemeToggle />
    </header>
  );
};

export default Header;