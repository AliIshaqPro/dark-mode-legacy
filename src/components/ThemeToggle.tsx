
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/toast";

const ThemeToggle = () => {
  const { toast } = useToast();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or prefer-color-scheme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ? savedTheme === "dark" : prefersDark;
  });

  useEffect(() => {
    // Update document class when theme changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toast({
      title: !isDarkMode ? "Dark mode enabled" : "Light mode enabled",
      description: "Your theme preference has been updated.",
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className="text-yellow-500 dark:text-gray-400" />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-neon-blue"
      />
      <Moon size={18} className="text-gray-400 dark:text-neon-blue" />
    </div>
  );
};

export default ThemeToggle;
