import styles from "./styles/Header2.module.scss";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavbarSection from "./NavbarSection";
import HeaderTop from "./HeaderTop";

const Header = ({ name, ...props }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showHiddenSidebars, setShowHiddenSidebars] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  let [count, setCount] = useState(0);

  const themeSwitcher = () => {
    // set theme to cookies for next time
    const cookies = parseCookies();
    const theme = cookies.theme ? cookies.theme : "light";
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
    document.cookie = `theme=${
      theme === "light" ? "dark" : "light"
    }; path=/; max-age=2592000`;
  };

  return (
    <>
      <header className={styles.headerSection}>
        <HeaderTop themeSwitcher={themeSwitcher}/>
        <NavbarSection />
      </header>
    </>
  );
};

export default Header;
