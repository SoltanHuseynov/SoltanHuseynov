import { ThemeProvider } from "../ThemeProvider";
import { Header } from "../Header";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header name="Your Name" />
    </ThemeProvider>
  );
}
