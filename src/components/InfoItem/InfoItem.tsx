import styles from "./InfoItem.module.scss";
import React, { ReactNode } from "react";

export interface InfoItemProps {
  icon: ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || "Not Available";
  let currentRef = "";

  if (isLink) {
    currentRef = text && text.startsWith("http") ? text : `https://${text}`;
  }
  return (
    <div className={`${styles.infoItem} ${text ? "" : `${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentRef}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
