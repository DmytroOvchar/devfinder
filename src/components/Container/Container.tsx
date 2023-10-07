import styles from "./Container.module.scss";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container} data-testid="Container">
    {children}
  </div>
);
