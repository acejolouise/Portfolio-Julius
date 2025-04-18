import { Skill, Project } from './component/types'
import React from 'react'
import profilePic from './assets/pfp.jpg'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import { DiJavascript1, DiReact, DiDotnet, DiJava, DiPython, DiCode, DiPhp, DiHtml5, DiCss3 } from 'react-icons/di'
import cvform from './assets/Julius Salinas - CV.pdf'

const App: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React JS' },
    { name: 'Ionic Framework' },
    { name: 'Tailwind CSS' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'Github' },
    { name: 'Java' },
    { name: 'C#' },
    { name: 'Unity' },
    { name: 'PHP' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Typescript' },
    { name: 'MySQL' },
    { name: 'Firebase' },
    { name: 'Figma' },
    { name: 'Game Development' },
    { name: 'Web Development' },
    { name: 'Mobile Development' },
    { name: 'Problem Solving' },
    { name: 'Agile Methodologies' },
    { name: 'Team Collaboration' },
    { name: 'CTF' },
  ]

  const projects: Project[] = [
    {
      name: 'Structify',
      description: 'A Web-Based Gamified Interactive Web-Based Application for Data Structures and Algorithms Learning.',
      link: '#',
      languages: ['Ionic Framework', 'HTML', 'CSS','Typescript'],
    },
    {
      name: 'bRAEnQUEST',
      description: 'An interactive Quiz Application designed to help high school students master algebra.',
      link: '#',
      languages: ['Ionic Framework', 'HTML', 'CSS'],
    },
    {
      name: 'Algeb-Run',
      description: 'A Temple Run-style Game that teaches algebra concepts through gameplay.',
      link: '#',
      languages: ['C#', 'Unity'],
    },
    {
      name: 'biomoleculAR',
      description: 'An interactive AR Application that teaches students about biomolecules.',
      link: '#',
      languages: ['C#', 'Unity'],
    },
    {
      name: 'Tic-Tac-Toe',
      description: 'A Java Application that allows users to play Tic-Tac-Toe against a computer.',
      link: '#',
      languages: ['Java'],
    },
    {
      name: 'Val-Eats',
      description: 'A Web Application that helps users find restaurants based on their preferences.',
      link: '#',
      languages: ['JavaScript', 'PHP', 'HTML', 'CSS'],
    },
    {
      name: 'Aswang',
      description: 'A One Button Game that allows users to kill Philippines Mythical Creature in a 2D Top View environment.',
      link: '#',
      languages: ['C#', 'Unity'],
    },
    {
      name: 'Pc Race Builders',
      description: 'A tabletop hybrid Game that allows users to buy their own PC using a deck of cards.',
      link: '#',
      languages: ['C#', 'Unity'],
    },
  ]

  const languageIcons: { [key: string]: JSX.Element } = {
    JavaScript: <DiJavascript1 className="text-xs md:text-sm" />,
    React: <DiReact className="text-xs md:text-sm" />,
    'C#': <DiDotnet className="text-xs md:text-sm" />, 
    Ionic: <DiCode className="text-xs md:text-sm" />,
    Java: <DiJava className="text-xs md:text-sm" />,
    Python: <DiPython className="text-xs md:text-sm" />,
    Unity: <DiCode className="text-xs md:text-sm" />, 
    PHP: <DiPhp className="text-xs md:text-sm" />,
    HTML: <DiHtml5 className="text-xs md:text-sm" />,
    CSS: <DiCss3 className="text-xs md:text-sm" />,
    TypeScript: <DiCode className="text-xs md:text-sm" />,
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 font-quantico">
      <div className="max-w-3xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Julius Salinas</h1>
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-400">Developer</p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/julius-louise-salinas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-gray-100"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              href="https://github.com/acejolouise"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-gray-100"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
            <a
              href={cvform}
              download
              className="flex items-center gap-2 text-gray-300 hover:text-gray-100"
            >
              <FaDownload className="text-xl" />
              Download CV
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">About Me</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Enthusiastic Developer with substantial experience in developing 3D games and designing applications using JavaScript frameworks. Adept at problem-solving, coding, and crafting immersive user experiences. Possesses a strong foundation in software development principles and a passion for innovation and learning new technologies
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm md:text-base"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                <h3 className="text-xl font-medium">{project.name}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.languages?.map((language, langIndex) => (
                    <span
                      key={langIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-full text-xs md:text-sm text-gray-300"
                    >
                      {languageIcons[language] || <DiCode className="text-xs md:text-sm" />}
                      {language}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-3 text-gray-300 underline hover:text-gray-100"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App