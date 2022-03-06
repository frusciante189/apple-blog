import { useRouter } from "next/router";
import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import useWindowSize from "../hooks/useWindowSize";

const Context = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const size = useWindowSize();
  const router = useRouter();

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (isOpen && size.width > 768) {
      setIsOpen(false);
    }
  }, [size.width]);

  useEffect(() => {
    if (isOpen && size.width < 768) {
      router.events.on("routeChangeStart", () => setIsOpen(false));
    }
    return () => {
      if (isOpen && size.width < 768) {
        router.events.off("routeChangeStart"), () => setIsOpen(false);
      }
    };
  }, [isOpen, router]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (size.width < 1024) {
        if (!ref.current.contains(e.target)) {
          if (!isOpen) return;
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [ref, isOpen]);

  const exposed = { isOpen, setIsOpen, theme, setTheme, ref };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);

export default Provider;
