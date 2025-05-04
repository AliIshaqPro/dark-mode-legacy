
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Theme = "dark" | "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const { toast } = useToast();

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light-mode", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light-mode", newTheme === "light");

    toast({
      title: `${newTheme === "light" ? "Light" : "Dark"} mode activated`,
      description: `Switched to ${newTheme} mode.`,
      duration: 2000,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-gray-300 hover:text-white transition-colors" />
      ) : (
        <Moon size={18} className="text-gray-700 hover:text-gray-900 transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
