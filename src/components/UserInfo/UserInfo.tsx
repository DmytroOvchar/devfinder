import { ReactComponent as IconCompany } from "assets/icon-company.svg";
import { ReactComponent as IconLocation } from "assets/icon-location.svg";
import { ReactComponent as IconTwitter } from "assets/icon-twitter.svg";
import { ReactComponent as IconWebSite } from "assets/icon-website.svg";
import { LocalGitHubUser } from "types";
import styles from "./UserInfo.module.scss";
import React from "react";
import { InfoItem, InfoItemProps } from "components/InfoItem";

interface UserInfoProps
  extends Pick<LocalGitHubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    { icon: <IconLocation />, text: location },
    { icon: <IconWebSite />, text: blog, isLink: true },
    { icon: <IconTwitter />, text: twitter },
    { icon: <IconCompany />, text: company },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, i) => (
        <InfoItem {...item} key={i} />
      ))}
    </div>
  );
};
