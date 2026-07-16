import SkillCard from "./components/SkillCard";
import { FaReact, FaPython, FaGitAlt,FaDatabase, FaCloud} from "react-icons/fa";
import {
    SiFlutter,
    SiMysql,
   
  } from "react-icons/si";

const skillData = [
  {
    icon: <FaReact className="text-3xl text-pink-500" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web interfaces using modern technologies.",
    skills: ["React", "Tailwind", "JavaScript"],
  },
  {
    icon: <SiFlutter className="text-3xl text-pink-500" />,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with modern tools.",
    skills: ["Flutter", "Dart"],
  },
  {
    icon: <FaDatabase className="text-3xl text-pink-500" />,
    title: "Database Management",
    description:
      "Designing and optimizing databases for performance and scalability.",
    skills: [ "MySQL", "Firebase"],
  },
  {
    icon: <FaCloud className="text-3xl text-pink-500" />,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications in cloud environment.",
    skills: [ "Docker", "Kubernetes","CI/CD"],
  },
  {
    icon: <FaPython className="text-3xl text-pink-500" />,
    title: "Data & Analytics",
    description:
      "Analyzing and visualizing data using modern analytical tools.",
    skills: ["Python", "SQL", "Power BI"],
  },
  {
    icon: <FaGitAlt className="text-3xl text-pink-500" />,
    title: "Tools & Technologies",
    description:
      "Using tools that streamline development and collaboration.",
    skills: ["Git", "GitHub", "Figma"],
  },
];


function Skills() {
  return (
    <section className="bg-red-50 py-20">

      <h2 className="text-6xl font-bold text-center mb-16">
        MY SKILLS
      </h2>

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillData.map((item) => (
            <SkillCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              skills={item.skills}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
export default Skills