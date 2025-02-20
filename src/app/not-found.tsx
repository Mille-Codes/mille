'use client';

import { FC } from "react";
import { usePathname } from "next/navigation";
import styles from "@/_styles/error.module.css"

const NotFound: FC = () => {
  const pathname: string = usePathname();
  const pageName: string = pathname.split("/")[1].toUpperCase()[0] + pathname.split("/")[1].slice(1);

  return (
    <div className={styles.error}>
      <h1>{pageName} Page Not Found</h1>
    </div>
  );
};

export default NotFound;