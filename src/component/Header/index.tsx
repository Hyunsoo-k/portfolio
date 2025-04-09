import { JSX, MouseEvent, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import { useGetViewport } from "@/hook/useGetViewport";

import styles from "./index.module.scss";
import { createPortal } from "react-dom";

const Header = (): JSX.Element => {
  const viewport = useGetViewport();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent<any>) => {
      const targetNode = e.target as Node;

      if (!mobileMenuRef.current?.contains(targetNode)) {
        setMobileMenuOpen(false);
      };
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickHamburger = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();

    setMobileMenuOpen((prev: boolean): boolean => !prev);
  };

  return(
    <div className={styles['component-container']}>
      <div className={styles['content']}>
        <div className={styles['title-wrapper']}>
          <Link to='/'>Hyunsoo Kim</Link>
        </div>
        {viewport === "mobile" && (
          <div
            ref={mobileMenuRef}
            onClick={handleClickHamburger}
            className={styles['hamburger-menu']}
          >
            <RxHamburgerMenu
              size={30}
            />
            {createPortal(
              <div 
                className={`${styles["mobile-menu-box"]} ${
                  mobileMenuOpen
                    ? styles["mobile-menu-box--open"]
                    : styles["mobile-menu-box--close"]
                }`}
              >
                <Link to='/aboutMe'>About Me</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/github'>Github</Link>
                <Link to='contact'>Contact</Link>
              </div>,
              document.body
            )}
          </div>
        )}
        {viewport !== "mobile" && (
          <div className={styles['menu-box']}>
            <Link to='/aboutMe'>About Me</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/github'>Github</Link>
            <Link to='contact'>Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;