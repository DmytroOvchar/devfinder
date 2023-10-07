import { ThemeSwitcher } from "components/ThemeSwitcher";
import styles from "./TheHeader.module.scss";
import React from "react";

interface TheHeaderProps {}

export const TheHeader = ({}: TheHeaderProps) => (
  <div className={styles.header} >
    <div className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher />
  </div>
);
