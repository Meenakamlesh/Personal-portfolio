import { useEffect,useState } from "react";
import { Header } from "./compoents/Header";
import { About } from "./compoents/About";
import { Skills } from "./compoents/Skills";
import { Projects } from "./compoents/Project";
import { Education } from "./compoents/Education";
import { Footer } from "./compoents/Footer";

export default function App() {
  // const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // useEffect(() => {
  //   if (theme === 'dark') document.documentElement.classList.add('dark');
  //   else document.documentElement.classList.remove('dark');
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  // const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Toggle Tailwind's dark mode class
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className=" min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="pt-4 pb-16">
        <About/>
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}