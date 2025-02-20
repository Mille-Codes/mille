"use client";

import { FC } from "react";
import { useTheme } from "@/_contexts/ThemeContext";
import styles from "@/_styles/ThemeToggleBtn.module.css";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
