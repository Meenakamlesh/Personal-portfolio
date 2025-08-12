import { ProfilePic,IconLink } from "./Header";
export const About = () => (
  <section id="about" className="max-w-4xl mx-auto px-4 py-8">
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
      <div className="p-6 md:flex md:gap-6">
        <div className="flex-shrink-0">
          <ProfilePic />
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">Kamlesh Meena</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>

          <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a skilled Frontend Developer building intuitive web applications using React, Node.js, and Tailwind CSS to ensure user-friendly designs and robust backend systems. My project, "B Ash Arts", is a comprehensive MERN stack e-commerce platform.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <IconLink href="mailto:km993016@gmail.com" label="km993016@gmail.com">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8z"/></svg>
            </IconLink>
            <IconLink href="tel:+919930167964" label="+91 99301 67964">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 5-2 2 4 4 2-2 5 2v2a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 7V6a2 2 0 012-1z"/></svg>
            </IconLink>
          </div>

          <div className="mt-4 flex gap-3">
            <a href="#projects" className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">About Me</a>
            <a href="/Kamlesh_Resume_new.pdf" download className="px-3 py-1 rounded-md bg-indigo-600 text-white">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);