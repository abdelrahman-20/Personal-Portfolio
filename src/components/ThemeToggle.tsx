import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/ulils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  // Effect only handles the DOM side effect, not state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "hover:cursor-pointer z-60",
        "fixed top-5 right-5 transition-colors duration-200",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
