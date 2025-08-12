 export const ProfilePic = () => (
  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden shadow-lg">
    {/* Replace the svg with your image or <img src={...} /> */}
    <svg className="w-20 h-20 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
  </div>
);
 export const IconLink = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition-transform">
    {children}
    <span className="text-sm">{label}</span>
  </a>
);


 export const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="sticky top-0 z-20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
            </div>
            <div>
              <div className="text-sm font-semibold">Kamlesh Meena</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* <nav className="hidden md:flex items-center gap-3 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#education" className="hover:underline">Education</a>
          </nav> */}
          <nav className="hidden md:flex items-center gap-3 text-sm font-medium">
  {['About', 'Skills', 'Projects', 'Education'].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className="px-3 py-1 rounded-full transition-all duration-300
                 hover:bg-indigo-600 hover:text-white
                 dark:hover:bg-indigo-500"
    >
      {item}
    </a>
  ))}
</nav>


        <button
  onClick={toggleTheme}
  aria-label="Toggle theme"
  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform"
>
  {theme === "dark" ? (
    // Sun Icon (Light Mode)
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm8-7a1 1 0 01-1-1V7a1 1 0 112 0v1a1 1 0 01-1 1zM3 10a1 1 0 01-1-1V7a1 1 0 112 0v1a1 1 0 01-1 1z" clipRule="evenodd" />
    </svg>
  ) : (
    // Moon Icon (Dark Mode)
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293a8 8 0 01-10.586-10.586 8 8 0 1010.586 10.586z" />
    </svg>
  )}
</button>

        </div>
      </div>
    </header>
  );
};