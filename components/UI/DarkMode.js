import React from "react";
import { Moon, Sun } from "phosphor-react";
import { useProvider } from "../../context/context";

const DarkMode = () => {
  const { theme, setTheme } = useProvider();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={themeHandler}
      className="sm:p-2 p-1.5 rounded-lg text-primary dark:text-darkText border border-primary dark:border-darkText dark:focus:border-transparent focus:border-transparent focus:outline-2 focus:outline-transparent focus:ring-2 focus:ring-purple-500
    transition-all transform duration-300 ease-in-out"
    >
      {theme === "light" ? (
        <>
          <Moon className="w-4 h-4" />
          <span className="sr-only">Sun Icon</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4" />
          <span className="sr-only">Moon Icon</span>
        </>
      )}
    </button>
  );
};

export default DarkMode;
