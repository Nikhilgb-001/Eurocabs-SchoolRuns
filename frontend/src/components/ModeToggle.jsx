import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setTheme("light")}
        className="bg-white border rounded-full p-2 hover:bg-gray-200"
      >
        <Sun className="h-5 w-5 text-yellow-500" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="bg-black border rounded-full p-2 ml-2 hover:bg-gray-700"
      >
        <Moon className="h-5 w-5 text-gray-300" />
      </button>
    </div>
  );
}
