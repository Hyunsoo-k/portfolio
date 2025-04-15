import { JSX, MouseEvent, useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import { useGetViewport } from "@/hook/useGetViewport";

import styles from "./index.module.scss"; 

const Header = (): JSX.Element => {
  const viewport = useGetViewport();

  const location = useLocation();
  const navigate = useNavigate();

  const [locatedTop, setLocatedTop] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setLocatedTop(true);
      } else {
        setLocatedTop(false);
      };
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

useEffect(() => {
  const hash = window.location.hash;

  if (hash) {
    const destinationComponent = document.querySelector(hash);

    if (destinationComponent) {
      const rect = destinationComponent.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop - 100;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }
}, [location]);

  const handleClickRoute = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();

    setMobileMenuOpen(false);

    const target = e.target as HTMLElement;

    const destinationRoute = target.innerHTML.replace(/\s/g, "");

    console.log(destinationRoute)

    switch (destinationRoute) {
      case "AboutMe":
        navigate("/#AboutMe");
        break;
      case "Portfolio":
        navigate("/#Portfolio");
        break;
      case "Skills":
        navigate("/#Skills");
        break;
      case "Github":
        window.open("https://github.com/Hyunsoo-k", "_blank");
        break;
      case "Contact":
        navigate("/#Contact");
        break;
    }
  };

  const handleClickHamburger = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();

    setMobileMenuOpen((prev: boolean): boolean => !prev);
  };

  return(
    <div className={
      `${styles["component-container"]} ${locatedTop ? styles["located-top"] : styles["located-no-top"]}`
    }>
      <div className={styles['main']}>
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
          </div>
        )}
        {viewport !== "mobile" && (
          <div className={styles['menu-box']}>
            <a onClick={handleClickRoute}>About Me</a>
            <a onClick={handleClickRoute}>Skills</a>
            <a onClick={handleClickRoute}>Portfolio</a>
            <a onClick={handleClickRoute}>Github</a>
            <a onClick={handleClickRoute}>Contact</a>
          </div>
        )}
      </div>
      {viewport === "mobile" && (
        <div 
          className={`${styles["mobile-menu-box"]} ${
            mobileMenuOpen
              ? styles["mobile-menu-box--open"]
              : styles["mobile-menu-box--close"]
          }`}
        >
          <a onClick={handleClickRoute}>About Me</a>
          <a onClick={handleClickRoute}>Skills</a>
          <a onClick={handleClickRoute}>Portfolio</a>
          <a onClick={handleClickRoute}>Github</a>
          <a onClick={handleClickRoute}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Header;