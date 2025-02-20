'use client';

import { FC } from "react";
import { usePathname } from "next/navigation";
import styles from "@/_styles/Error.module.css"

const NotFound: FC = () => {
  const pathname: string = usePathname();
  const pageName: string = pathname.split("/")[1].toUpperCase()[0] + pathname.split("/")[1].slice(1);

  return (
    <main className={styles.error}>
      <h1>{pageName} Page Not Found</h1>
    </main>
  );
};

export default NotFound;