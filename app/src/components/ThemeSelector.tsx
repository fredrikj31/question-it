import { useTheme } from "../providers/Theme";

export const ThemeSelector = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <label htmlFor="theme" className="mr-2">
        Choose a theme:
      </label>
      <select
        name="theme"
        id="theme"
        className="dark:bg-zinc-950 dark:border-white border rounded-sm border-zinc-950 bg-white dark:text-white text-zinc-950"
        onChange={(e) => {
          switch (e.currentTarget.value) {
            case "system":
            case "dark":
            case "light":
              setTheme(e.currentTarget.value);
              break;
            default:
              break;
          }
        }}
      >
        <option
          className="dark:bg-zinc-950 bg-white dark:text-white text-zinc-950"
          value="system"
        >
          System
        </option>
        <option
          className="dark:bg-zinc-950 bg-white dark:text-white text-zinc-950"
          value="light"
        >
          Light
        </option>
        <option
          className="dark:bg-zinc-950 bg-white dark:text-white text-zinc-950"
          value="dark"
        >
          Dark
        </option>
      </select>
    </div>
  );
};
