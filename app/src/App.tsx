import { Button } from "@shadcn-ui/components/ui/button";
import { ThemeProvider } from "./providers/Theme";
import { ThemeSelector } from "./components/ThemeSelector";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <h1 className="text-lg">Hello World</h1>
        <Button variant="default">Button</Button>
        <ThemeSelector />
      </ThemeProvider>
    </>
  );
};
