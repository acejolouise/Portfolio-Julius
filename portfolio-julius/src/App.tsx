import { Project } from './component/types'
import React from 'react'
import profilePic from './assets/pfp.jpg'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import { DiJavascript1, DiReact, DiDotnet, DiJava, DiPython, DiCode, DiPhp, DiHtml5, DiCss3 } from 'react-icons/di'
import ProjectSlideshow from './component/ProjectSlideshow'
import ScrollProgressIndicator from './component/ScrollProgressIndicator'
import cvform from './assets/Julius Salinas - CV 1.1.pdf'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import AnimatedBackground from './component/AnimatedBackground'

// Import project screenshots
import braenquest1 from './assets/screenshot projects/braenquest1.jpeg'
import braenquest2 from './assets/screenshot projects/braenquest2.jpeg'
import braenquest3 from './assets/screenshot projects/braenquest3.jpeg'
import braenquest4 from './assets/screenshot projects/braenquest4.jpeg'
import braenquest5 from './assets/screenshot projects/braenquest5.jpeg'
import braenquest6 from './assets/screenshot projects/braenquest6.jpeg'
import algebrun1 from './assets/screenshot projects/algebrun1.jpeg'
import algebrun2 from './assets/screenshot projects/algebrun2.jpeg'
import aswang1 from './assets/screenshot projects/aswang1.jpeg'
import aswang2 from './assets/screenshot projects/aswang2.jpeg'
import aswang3 from './assets/screenshot projects/aswang3.jpeg'
import pcracebuilders1 from './assets/screenshot projects/pcracebuilders1.jpeg'
import pcracebuilders2 from './assets/screenshot projects/pcracebuilders2.jpeg'
import pcracebuilders3 from './assets/screenshot projects/pcracebuilders3.jpeg'
import valeats1 from './assets/screenshot projects/valeats.png'
import valeats2 from './assets/screenshot projects/valeats2.png'
import moleculAR1 from './assets/screenshot projects/moleculAR1.png'
import moleculAR2 from './assets/screenshot projects/moleculAR2.png'
import moleculAR3 from './assets/screenshot projects/moleculAR3.png'
import structify1 from './assets/screenshot projects/structify1.png'
import structify2 from './assets/screenshot projects/structify2.png'
import structify3 from './assets/screenshot projects/structify3.png'
import structify4 from './assets/screenshot projects/structify4.png'
import structify5 from './assets/screenshot projects/structify5.png'



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
      image: structify1,
      images: [
        structify1,
        structify2,
        structify3,
        structify4,
        structify5
      ]
    },
    {
      name: 'bRAEnQUEST',
      description: 'An interactive Quiz Application designed to help high school students master algebra.',
      link: 'https://github.com/acejolouise',
      languages: ['Ionic+Angular', 'Android Studio','TypeScript', 'HTML/CSS'],
      image: braenquest1,
      images: [
        braenquest1,
        braenquest2,
        braenquest3,
        braenquest4,
        braenquest5,
        braenquest6
      ]
    },
    {
      name: 'Algeb-Run',
      description: 'A Temple Run-style Game that teaches algebra concepts through gameplay.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: algebrun1,
      images: [
        algebrun1,
        algebrun2
      ]
    },
    {
      name: 'biomoleculAR',
      description: 'An interactive AR Application that teaches students about biomolecules.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: moleculAR1,
      images: [
        moleculAR1,
        moleculAR2,
        moleculAR3
      ]
    },
   
    {
      name: 'Val-Eats',
      description: 'A Web Application that helps users find restaurants based on their preferences.',
      link: 'https://github.com/acejolouise',
      languages: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      image: valeats1,
      images: [
        valeats1,
        valeats2
      ]
    },
    {
      name: 'Aswang',
      description: 'A One Button Game that allows users to kill Philippines Mythical Creature in a 2D Top View environment.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: aswang1,
      images: [
        aswang1,
        aswang2,
        aswang3
      ]
    },
    {
      name: 'Pc Race Builders',
      description: 'A tabletop hybrid Game that allows users to buy their own PC using a deck of cards.',
      link: 'https://github.com/acejolouise',
      languages: ['C#', 'Unity'],
      image: pcracebuilders1,
      images: [
        pcracebuilders1,
        pcracebuilders2,
        pcracebuilders3
      ]
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
      <ScrollProgressIndicator />
      <AnimatedBackground />
      <div className="max-w-3xl w-full relative z-10">
        <motion.header 
          className="text-center mb-12 pt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full blur-md opacity-75"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="inline-block relative z-10">
              <motion.div 
                className="w-28 h-28 md:w-36 md:h-36 mx-auto bg-gray-700 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                whileHover={{ boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </Tilt>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Julius Salinas
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-medium">
              Full Stack Developer
            </span> | AI/ML Enthusiast | Game Developer | Web & App Developer
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
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
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
              className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500 transition-all"
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={cvform}
              download
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all"
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
            className="text-2xl md:text-3xl font-semibold mb-4 text-center relative inline-block"
            variants={fadeInUp}
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/50 rounded"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.h2>
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-xl backdrop-blur-sm"
            variants={fadeInUp}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm a passionate Information Technology student with a strong interest in software development, AI/ML, web & mobile development and game design. I enjoy building interactive projects that solve real-world problems or enhance user experience.
            </p>
          </motion.div>
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
            className="text-2xl md:text-3xl font-semibold mb-4 relative inline-block"
            variants={fadeInUp}
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Technical Skills</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/50 rounded"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
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
                      className="px-4 py-2 bg-gray-700 rounded-full text-sm md:text-base flex items-center gap-1.5 border border-transparent hover:border-blue-500/30"
                      variants={fadeInUp}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "#374151", 
                        color: "#f8fafc",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-400"></span>
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
            className="text-2xl md:text-3xl font-semibold mb-4 relative inline-block"
            variants={fadeInUp}
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/50 rounded"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group p-5 bg-gray-800 rounded-lg transition overflow-hidden border border-gray-700 hover:border-blue-500/30"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#2d3748"
                }}
              >
                <div className="mb-4 rounded-md overflow-hidden shadow-lg transform group-hover:scale-[1.01] transition-transform">
                  <ProjectSlideshow 
                    image={project.image}
                    images={project.images}
                    name={project.name}
                  />
                </div>
                <h3 className="text-xl font-medium group-hover:text-blue-400 transition-colors">{project.name}</h3>
                <p className="text-gray-400 mt-2 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.languages?.map((language, langIndex) => (
                    <motion.span
                      key={langIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-700/70 backdrop-blur-sm rounded-full text-xs md:text-sm text-gray-300 border border-transparent hover:border-blue-500/30"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "#374151",
                        color: "#f8fafc" 
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }}
                    >
                      {languageIcons[language] || <DiCode className="text-xs md:text-sm" />}
                      {language}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.footer
          className="mt-16 pb-8 border-t border-gray-800 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <p className="text-gray-400 mb-3">© {new Date().getFullYear()} Julius Salinas. All rights reserved.</p>
            <div className="flex justify-center gap-6 mb-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/julius-louise-salinas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/acejolouise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
            </div>
            <motion.p 
              className="text-sm text-gray-500"
              variants={fadeInUp}
            >
              Built with React, Tailwind CSS
            </motion.p>
          </motion.div>
        </motion.footer>
      </div>
    </div>
  )
}

export default App