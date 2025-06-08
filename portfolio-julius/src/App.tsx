import { Project } from './component/types'
import React, { useState, useRef } from 'react'
import profilePic from './assets/pfp.jpg'
import { FaLinkedin, FaGithub, FaEye } from 'react-icons/fa'
import { DiJavascript1, DiReact, DiDotnet, DiJava, DiPython, DiCode, DiPhp, DiHtml5, DiCss3 } from 'react-icons/di'
import ProjectSlideshow from './component/ProjectSlideshow'
import ScrollProgressIndicator from './component/ScrollProgressIndicator'
import PDFPreviewModal from './component/PDFPreviewModal'
import cvform from './assets/CV_JULIUS_SALINAS.pdf'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import AnimatedBackground from './component/AnimatedBackground'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import ContactForm from './component/ContactForm'

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed to true for default dark mode
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-black'} flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 font-quantico relative`}>
      <ScrollProgressIndicator />
      <AnimatedBackground />
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.header 
          className="text-center mb-12 pt-8 sm:pt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          ref={el => sectionRefs.current[0] = el}
        >
          <motion.div
            className="mb-6 sm:mb-8 relative"
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
                className={`w-28 h-28 md:w-36 md:h-36 mx-auto ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} rounded-full flex items-center justify-center overflow-hidden border-2`}
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
            className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-white to-blue-200' : 'bg-gradient-to-r from-blue-700 to-blue-900'}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Julius Louise Salinas
          </motion.h1>
          
          <motion.p 
            className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} max-w-lg mx-auto px-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className={`${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-blue-500' : 'bg-gradient-to-r from-blue-700 to-blue-900'} bg-clip-text text-transparent font-medium`}>
              Full Stack Developer
            </span> | AI/ML Enthusiast | Game Developer
          </motion.p>
          <motion.div 
            className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4 px-2"
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
              className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:text-blue-400 bg-gray-800/50' : 'text-black hover:text-blue-700 bg-gray-200/70'} backdrop-blur-sm px-4 py-2 rounded-lg ${isDarkMode ? 'border border-gray-700 hover:border-blue-500/50' : 'border border-gray-300 hover:border-blue-400/50'} transition-all`}
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
              className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:text-white bg-gray-800/50' : 'text-black hover:text-gray-900 bg-gray-200/70'} backdrop-blur-sm px-4 py-2 rounded-lg ${isDarkMode ? 'border border-gray-700 hover:border-gray-500' : 'border border-gray-300 hover:border-gray-400'} transition-all`}
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:text-green-400 bg-gray-800/50' : 'text-black hover:text-green-700 bg-gray-200/70'} cursor-pointer backdrop-blur-sm px-4 py-2 rounded-lg ${isDarkMode ? 'border border-gray-700 hover:border-green-500/50' : 'border border-gray-300 hover:border-green-500/50'} transition-all`}
            >
              <FaEye className="text-xl" />
              View CV
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
          }}
          ref={el => sectionRefs.current[1] = el}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-4 text-center relative inline-block"
            variants={fadeInUp}
          >
            <span className={`relative z-10 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-blue-500' : 'bg-gradient-to-r from-blue-700 to-blue-900'} bg-clip-text text-transparent`}>About Me</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/50 rounded"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.h2>
          <motion.div 
            className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/90'} p-6 rounded-lg ${isDarkMode ? 'border border-gray-700' : 'border border-gray-300'} shadow-xl backdrop-blur-sm`}
            variants={fadeInUp}
          >
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-black'} text-base md:text-lg leading-relaxed`}>
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
          ref={el => sectionRefs.current[2] = el}
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
                className={`mb-6 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm p-4 sm:p-6 rounded-lg ${isDarkMode ? 'border border-gray-700 hover:border-blue-500/30' : 'border border-gray-300 hover:border-blue-400/30'} transition-all`} 
                variants={fadeInUp}
              >
                <h3 className={`text-lg sm:text-xl font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={`${catIndex}-${index}`}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 ${isDarkMode ? 'bg-gray-700/90' : 'bg-gray-200/90'} rounded-full text-xs sm:text-sm flex items-center gap-1.5 border border-transparent ${isDarkMode ? 'hover:border-blue-500/30' : 'hover:border-blue-400/50'}`}
                      variants={fadeInUp}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: isDarkMode ? "#374151" : "#e5e7eb", 
                        color: isDarkMode ? "#f8fafc" : "#1f2937",
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
          ref={el => sectionRefs.current[3] = el}
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
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`group p-4 sm:p-5 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm rounded-lg transition-all overflow-hidden ${isDarkMode ? 'border border-gray-700 hover:border-blue-500/30' : 'border border-gray-300 hover:border-blue-400/30'}`}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  backgroundColor: isDarkMode ? "#2d3748" : "#f9fafb"
                }}
              >
                <div className="mb-3 sm:mb-4 rounded-md overflow-hidden shadow-lg transform group-hover:scale-[1.01] transition-transform">
                  <ProjectSlideshow 
                    image={project.image}
                    images={project.images}
                    name={project.name}
                    isDarkMode={isDarkMode}
                  />
                </div>
                <h3 className={`text-lg sm:text-xl font-medium ${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'} transition-colors`}>{project.name}</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1.5 sm:mt-2 text-sm`}>{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                  {project.languages?.map((language, langIndex) => (
                    <motion.span
                      key={langIndex}
                      className={`flex items-center gap-1 px-2 sm:px-3 py-1 ${isDarkMode ? 'bg-gray-700/70 text-gray-300' : 'bg-gray-200/90 text-gray-700'} backdrop-blur-sm rounded-full text-xs border border-transparent ${isDarkMode ? 'hover:border-blue-500/30' : 'hover:border-blue-400/50'}`}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: isDarkMode ? "#374151" : "#e5e7eb", 
                        color: isDarkMode ? "#f8fafc" : "#1f2937"
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }}
                    >
                      {languageIcons[language] || <DiCode className="text-xs" />}
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
                  className={`inline-flex items-center gap-1 mt-3 sm:mt-4 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors text-sm sm:text-base font-medium`}
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
           
        {/* Contact Section */}
        <motion.section
          className="mb-16"
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
          ref={el => sectionRefs.current[4] = el}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-4 relative inline-block"
            variants={fadeInUp}
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Contact Me</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/50 rounded"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.h2>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <motion.div 
              className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm p-6 rounded-lg ${isDarkMode ? 'border border-gray-700 hover:border-blue-500/30' : 'border border-gray-300 hover:border-blue-400/30'} transition-all shadow-xl`}
              variants={fadeInUp}
            >
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Let's Connect</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                Feel free to reach out for collaboration opportunities, job inquiries, or just to say hello!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600/30 p-3 rounded-full">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Email</p>
                    <a href="mailto:juliuslouisesalinas@gmail.com" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                      juliuslouisesalinas@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600/30 p-3 rounded-full">
                    <FaLinkedin className="text-blue-400" />
                  </div>
                  <div>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/julius-salinas" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
                    >
                      /julius-salinas
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600/30 p-3 rounded-full">
                    <FaGithub className="text-blue-400" />
                  </div>
                  <div>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>GitHub</p>
                    <a 
                      href="https://github.com/acejolouise" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
                    >
                      /acejolouise
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm p-6 rounded-lg ${isDarkMode ? 'border border-gray-700 hover:border-blue-500/30' : 'border border-gray-300 hover:border-blue-400/30'} transition-all shadow-xl`}
              variants={fadeInUp}
            >
              <h3 className={`text-xl font-medium mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Send a Message</h3>
              <ContactForm isDarkMode={isDarkMode} />
            </motion.div>
          </div>
        </motion.section>

        <motion.footer
          className={`mt-16 pb-8 ${isDarkMode ? 'border-t border-gray-800' : 'border-t border-gray-200'} pt-8`}
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
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 font-medium`}>© {new Date().getFullYear()} Julius Salinas. All rights reserved.</p>
            <div className="flex justify-center gap-6 mb-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/julius-louise-salinas"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600 hover:shadow-lg'} transition-colors p-2 rounded-full ${!isDarkMode && 'hover:bg-blue-50'}`}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/acejolouise"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900 hover:shadow-lg'} transition-colors p-2 rounded-full ${!isDarkMode && 'hover:bg-gray-100'}`}
              >
                <FaGithub className="text-xl" />
              </motion.a>
            </div>
            <motion.p 
              className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}
              variants={fadeInUp}
            >
              Built with React, Tailwind CSS
            </motion.p>
          </motion.div>
        </motion.footer>

        <PDFPreviewModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          pdfUrl={cvform} 
          fileName="Julius_Salinas_CV.pdf"
        />

        {/* Theme Toggle Button */}
        <motion.button
          className={`fixed top-4 right-4 p-2 rounded-full z-50 ${isDarkMode ? 'bg-gray-700' : 'bg-white shadow-lg'}`}
          onClick={() => setIsDarkMode(!isDarkMode)}
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? (
            <IoMdSunny className="text-xl text-yellow-300" />
          ) : (
            <IoMdMoon className="text-xl text-gray-700" />
          )}
        </motion.button>
        
        {/* Floating Navigation Menu */}
        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full ${isDarkMode ? 'shadow-lg' : 'shadow-xl'} p-2 transition-all z-50 ${!isDarkMode && 'border border-gray-100'}`}>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(0)}
              className={`${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-blue-600'} flex flex-col items-center px-2 py-1 rounded-lg transition-colors`}
            >
              <FaHome className="text-xl" />
              <span className="text-xs">Home</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(1)}
              className={`${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-blue-600'} flex flex-col items-center px-2 py-1 rounded-lg transition-colors`}
            >
              <FaUser className="text-xl" />
              <span className="text-xs">About</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(2)}
              className={`${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-blue-600'} flex flex-col items-center px-2 py-1 rounded-lg transition-colors`}
            >
              <FaTools className="text-xl" />
              <span className="text-xs">Skills</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(3)}
              className={`${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-blue-600'} flex flex-col items-center px-2 py-1 rounded-lg transition-colors`}
            >
              <FaProjectDiagram className="text-xl" />
              <span className="text-xs">Projects</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(4)}
              className={`${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-blue-600'} flex flex-col items-center px-2 py-1 rounded-lg transition-colors`}
            >
              <FaEnvelope className="text-xl" />
              <span className="text-xs">Contact</span>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Additional light mode background elements */}
      {!isDarkMode && (
        <>
          <div className="fixed top-0 right-0 w-1/4 h-1/4 bg-blue-100/30 rounded-bl-full -z-10 blur-3xl"></div>
          <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/40 rounded-tr-full -z-10 blur-3xl"></div>
        </>
      )}
    </div>
  )
}

export default App