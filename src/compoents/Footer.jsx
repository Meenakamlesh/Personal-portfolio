export const Footer = () => (
  <footer className="max-w-4xl mx-auto px-4 py-8 text-sm text-gray-500">
    <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
      <div>© {new Date().getFullYear()} Kamlesh Meena</div>
      <div className="flex gap-3">
        <a href="https://github.com/Meenakamlesh" className="hover:underline">
          GitHub
        </a>
        <a
          href="www.linkedin.com/in/
kamlesh-meena"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);
