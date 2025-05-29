import { Skill, Project } from './component/types'
import React from 'react'
import profilePic from './assets/pfp.jpg'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import { DiJavascript1, DiReact, DiDotnet, DiJava, DiPython, DiCode, DiPhp, DiHtml5, DiCss3 } from 'react-icons/di'
import ProjectSlideshow from './component/ProjectSlideshow'
import cvform from './assets/Julius Salinas - CV 1.1.pdf'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import AnimatedBackground from './component/AnimatedBackground'

const App: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'C#', 'PHP', 'Python', 'C++', 'JavaScript']
    },
    {
      category: 'Game Development',
      skills: ['Unity']
    },
    {
      category: 'Mobile Development',
      skills: ['Android Studio', 'React-Native', 'Ionic+Angular']
    },
    {
      category: 'Full Stack Development',
      skills: ['HTML/CSS', 'React', 'Tailwind CSS', 'TypeScript', 'Laravel PHP', 'Rest API', 'Express JS']
    },
    {
      category: 'Cybersecurity',
      skills: ['Kali Linux']
    },
    {
      category: 'AI/ML Tools (Beginner)',
      skills: ['Pytorch', 'Scikit-Learn']
    },
    {
      category: 'Multimedia Tools',
      skills: ['Blender', 'Photoshop', 'Canva', 'Premiere Pro', 'Illustrator', 'After Effects']
    },
    {
      category: 'Office & Workflow',
      skills: ['Microsoft Office', 'Google Workspace']
    }
  ];
  
  const projects: Project[] = [
    {
      name: 'Structify',
      description: 'A Web-Based Gamified Interactive Web-Based Application for Data Structures and Algorithms Learning.',
      link: 'https://github.com/acejolouise',
      languages: ['React', 'Tailwind CSS', 'Javascript','Typescript', 'HTML/CSS', 'Rest API', 'Express JS'],
      image: 'https://via.placeholder.com/300x200?text=Structify',
      images: [
        'https://via.placeholder.com/300x200?text=Structify+Home',
        'https://via.placeholder.com/300x200?text=Structify+Dashboard',
        'https://via.placeholder.com/300x200?text=Structify+Learning'
      ]
    },
    {
      name: 'bRAEnQUEST',
      description: 'An interactive Quiz Application designed to help high school students master algebra.',
      link: 'https://github.com/acejolouise',
      languages: ['Ionic+Angular', 'Android Studio','TypeScript', 'HTML/CSS'],
      image: 'https://via.placeholder.com/300x200?text=bRAEnQUEST',
      images: [
        'https://via.placeholder.com/300x200?text=bRAEnQUEST+Main',
        'https://via.placeholder.com/300x200?text=bRAEnQUEST+Quiz',
        'https://via.placeholder.com/300x200?text=bRAEnQUEST+Results'
      ]
    },
    {
      name: 'Algeb-Run',
      description: 'A Temple Run-style Game that teaches algebra concepts through gameplay.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: 'https://via.placeholder.com/300x200?text=Algeb-Run',
      images: [
        'https://via.placeholder.com/300x200?text=Algeb-Run+Gameplay',
        'https://via.placeholder.com/300x200?text=Algeb-Run+Menu',
        'https://via.placeholder.com/300x200?text=Algeb-Run+Problem'
      ]
    },
    {
      name: 'biomoleculAR',
      description: 'An interactive AR Application that teaches students about biomolecules.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: 'https://via.placeholder.com/300x200?text=biomoleculAR',
      images: [
        'https://via.placeholder.com/300x200?text=biomoleculAR+Main',
        'https://via.placeholder.com/300x200?text=biomoleculAR+Model',
        'https://via.placeholder.com/300x200?text=biomoleculAR+Info'
      ]
    },
    {
      name: 'Tic-Tac-Toe',
      description: 'A Java Application that allows users to play Tic-Tac-Toe against a computer.',
      link: 'https://github.com/acejolouise',
      languages: ['Java'],
      image: 'https://via.placeholder.com/300x200?text=Tic-Tac-Toe',
    },
    {
      name: 'Val-Eats',
      description: 'A Web Application that helps users find restaurants based on their preferences.',
      link: 'https://github.com/acejolouise',
      languages: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      image: 'https://via.placeholder.com/300x200?text=Val-Eats',
    },
    {
      name: 'Aswang',
      description: 'A One Button Game that allows users to kill Philippines Mythical Creature in a 2D Top View environment.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: 'https://via.placeholder.com/300x200?text=Aswang',
    },
    {
      name: 'Pc Race Builders',
      description: 'A tabletop hybrid Game that allows users to buy their own PC using a deck of cards.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: 'https://via.placeholder.com/300x200?text=PC+Race+Builders',
    },
    {
      name: 'Dice Roller',
      description: 'A mobile application that can roll d4, d20 etc.',
      link: 'https://github.com/acejolouise',
      languages: ['React-Native', 'Android Studio', 'TypeScript', 'HTML/CSS'],
      image: 'https://via.placeholder.com/300x200?text=Dice+Roller',
    },
  ]

  const languageIcons: Record<string, React.ReactNode> = {
    JavaScript: <DiJavascript1 className="text-xs md:text-sm" />,
    React: <DiReact className="text-xs md:text-sm" />,
    'C#': <DiDotnet className="text-xs md:text-sm" />, 
    'Ionic Framework': <DiCode className="text-xs md:text-sm" />,
    'Ionic+Angular': <DiCode className="text-xs md:text-sm" />,
    Java: <DiJava className="text-xs md:text-sm" />,
    Python: <DiPython className="text-xs md:text-sm" />,
    Unity: <DiCode className="text-xs md:text-sm" />, 
    PHP: <DiPhp className="text-xs md:text-sm" />,
    HTML: <DiHtml5 className="text-xs md:text-sm" />,
    'HTML/CSS': <DiHtml5 className="text-xs md:text-sm" />,
    CSS: <DiCss3 className="text-xs md:text-sm" />,
    TypeScript: <DiCode className="text-xs md:text-sm" />,
    Typescript: <DiCode className="text-xs md:text-sm" />,
    'Laravel PHP': <DiPhp className="text-xs md:text-sm" />,
    'Rest API': <DiCode className="text-xs md:text-sm" />,
    'Express JS': <DiCode className="text-xs md:text-sm" />,
    'Android Studio': <DiCode className="text-xs md:text-sm" />,
    'React-Native': <DiReact className="text-xs md:text-sm" />,
    'Tailwind CSS': <DiCss3 className="text-xs md:text-sm" />,
  }
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 font-quantico relative">
      <AnimatedBackground />
      <div className="max-w-3xl w-full relative z-10">
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Julius Salinas
          </motion.h1>
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="inline-block">
            <motion.div 
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </Tilt>
          <motion.p 
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Full Stack Developer | AI/ML Enthusiast | Game Developer | Web & App Developer
          </motion.p>
          <motion.div 
            className="mt-4 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/julius-louise-salinas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-gray-100"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/acejolouise"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-gray-100"
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={cvform}
              download
              className="flex items-center gap-2 text-gray-300 hover:text-gray-100"
            >
              <FaDownload className="text-xl" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.header>

        <motion.section 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}>
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-4 text-center"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base md:text-lg leading-relaxed"
            variants={fadeInUp}
          >
I'm a passionate Information Technology student with a strong interest in software development, AI/ML, web & mobile development and game design. I enjoy building interactive projects that solve real-world problems or enhance user experience.          </motion.p>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            }
          }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-4"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
          {skillCategories && skillCategories.length > 0 ? (
            skillCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex} 
                className="mb-6 bg-gray-800 p-4 rounded-lg" 
                variants={fadeInUp}
              >
                <h3 className="text-xl font-medium mb-3 text-gray-200">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={`${catIndex}-${index}`}
                      className="px-4 py-2 bg-gray-700 rounded-full text-sm md:text-base"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-red-400">No skill categories found</p>
          )}
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-4"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-800 rounded-lg transition overflow-hidden"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  backgroundColor: "#374151"
                }}
              >
                <div className="mb-4 rounded-md overflow-hidden">
                  <ProjectSlideshow 
                    image={project.image}
                    images={project.images}
                    name={project.name}
                  />
                </div>
                <h3 className="text-xl font-medium">{project.name}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.languages?.map((language, langIndex) => (
                    <motion.span
                      key={langIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-full text-xs md:text-sm text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {languageIcons[language] || <DiCode className="text-xs md:text-sm" />}
                      {language}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-gray-300 underline hover:text-gray-100"
                >
                  View Project
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default App