const ProjectCard = ({
  title,
  description,
  tech,
  viewLink,
  sourceLink,
  status,
}) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow w-full md:w-1/2">
    {/* Status Badge */}
    <span
      className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full 
      ${
        status === "Completed"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status || "In Progress"}
    </span>
    <h3 className="text-md font-semibold">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
      {description}
    </p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-xs"
        >
          {t}
        </span>
      ))}
    </div>
    {/* <div className="mt-3 flex gap-2">
      <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">View</button>
      <button className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">Source</button>
    </div> */}
    {/* Buttons */}
    <div className="mt-3 flex gap-2">
      <a
        href={viewLink || '#'}
        target={viewLink ? '_blank' : undefined}
        rel="noopener noreferrer"
        className={`px-3 py-1 rounded-md text-sm ${
          viewLink
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
        }`}
      >
        View
      </a>
      <a
        href={sourceLink || '#'}
        target={sourceLink ? '_blank' : undefined}
        rel="noopener noreferrer"
        className={`px-3 py-1 rounded-md text-sm ${
          sourceLink
            ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
        }`}
      >
        Source
      </a>
    </div>
  </div>
);

export const Projects = () => {
  const projects = [
    {
      title: "B Ash Arts",
      description:
        "Developed a fully functional e-commerce platform using MERN stack with authentication, product upload, CRUD operations, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      viewLink: "", // No link = will show "In Progress"
      sourceLink: "",
    },
    {
      title: "NotesApp",
      description:
        "Designed a modern note-taking application with local storage and CRUD on notes.",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      viewLink: "https://notes-app-pi-coral.vercel.app/",
      status: "Completed",
      sourceLink: "https://github.com/Meenakamlesh/NotesApp.git",
    },
    {
      title: "HopeForwardNGO",
      description:
        "Non-profit site built to support underprivileged communities with donation pages and projects listing.",
      tech: ["React", "Tailwind CSS"],
      status: "Completed",
      viewLink: "https://hope-forward-ngo-tau.vercel.app/",
      sourceLink: "https://github.com/Meenakamlesh/HopeForwardNGO.git",
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <div className="flex flex-wrap gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};
