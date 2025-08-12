const Skill = ({ name }) => (
  <div className="px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm shadow-sm hover:scale-105 transition-transform">
    {name}
  </div>
);

export const Skills = () => {
  const skills = ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express.js', 'JavaScript'];
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => <Skill key={s} name={s} />)}
      </div>
    </section>
  );
};