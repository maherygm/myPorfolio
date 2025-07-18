"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  Palette,
  Smartphone,
  Menu,
  X,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ChevronDown,
  Globe,
  Database,
  Terminal,
} from "lucide-react"
import AnimatedCursor from "@/components/animated-cursor"
import LottieAnimation from "@/components/lottie-animation"
// Ajouter l'import du composant Experience
import ExperienceSection from "@/components/experience-section"

export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const skills = [
    { name: "JavaScript", icon: Code, level: 93 },
    { name: "TypeScript", icon: Terminal, level: 90 },
    { name: "React", icon: Globe, level: 88 },
    { name: "Angular", icon: Database, level: 85 },
    { name: "UI/UX Design", icon: Palette, level: 80 },
    { name: "Next.js", icon: Smartphone, level: 85 },
  ]

  const projects = [
    {
      title: "Smart Tix",
      description:
        "Application web de gestion de tickets et de réservation de places avec système de paiement sécurisé",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "TypeScript", "Payment"],
      github: "#",
      demo: "#",
    },
    {
      title: "Ny Tananako",
      description: "Application de cartographie interactive avec cartes dynamiques et géolocalisation",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Maps API", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Royal Espace",
      description: "Application de gestion de location de salles avec optimisation des réservations",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Angular", "Express", "PostgreSQL", "TypeScript"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="59, 130, 246"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="submit"]',
          "textarea",
          "button",
          ".cursor-pointer",
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <span className="text-white font-semibold">Mahery</span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors cursor-pointer ${
                      activeSection === section ? "text-blue-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
              >
                <div className="px-6 py-4 space-y-4">
                  {["home", "about", "skills", "projects", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    JEAN MAHERY
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    RAKOTOMALALA
                  </Badge>
                </div>
                <motion.h1
                  className="text-4xl lg:text-7xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  DÉVELOPPEUR
                </motion.h1>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-xl text-blue-400 font-medium">• DÉVELOPPEUR FRONT-END</p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  Développeur Front-End JavaScript/TypeScript, passionné par la création d'applications web performantes
                  et intuitives. Je maîtrise les technologies modernes du front-end et du back-end, tout en assurant la
                  qualité du code grâce à TypeScript.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full cursor-pointer"
                  onClick={() => scrollToSection("projects")}
                >
                  Voir mes projets
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white cursor-pointer"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <LottieAnimation className="absolute top-10 left-10 w-20 h-20" />
                <LottieAnimation className="absolute bottom-20 right-10 w-16 h-16" />

                <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-3xl p-8 backdrop-blur-sm border border-slate-600/30">
                  <motion.div
                    className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-32 h-32 bg-white rounded-full relative">
                      <div className="absolute top-8 left-8 w-4 h-4 bg-slate-800 rounded-full"></div>
                      <div className="absolute top-8 right-8 w-4 h-4 bg-slate-800 rounded-full"></div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-800 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-0 w-24 h-32 bg-white rounded-t-full"></div>
                  </motion.div>

                  <motion.div
                    className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Code className="w-6 h-6" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-xl shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Palette className="w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">À propos de moi</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Développeur Front-End avec une solide expérience dans les technologies JavaScript/TypeScript.
                Actuellement développeur chez Acces Banques Madagascar, je me spécialise dans la création d'interfaces
                utilisateur modernes et performantes. Passionné par l'innovation, j'ai participé à plusieurs hackathons
                et remporté la 2ème place au Hack Master.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Compétences</h2>
              <p className="text-xl text-gray-300">Technologies que je maîtrise</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                          <skill.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                          <p className="text-sm text-gray-400">{skill.level}%</p>
                        </div>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Mes Projets</h2>
              <p className="text-xl text-gray-300">Découvrez mes réalisations récentes</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="cursor-pointer"
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <Button size="sm" variant="secondary" className="cursor-pointer">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="cursor-pointer">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Contactez-moi</h2>
              <p className="text-xl text-gray-300">Prêt à collaborer sur votre prochain projet ?</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">mahery.rakotomalala@accesbanque.mg</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                    <p className="text-gray-400">+261 34 76 293 34</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Localisation</h3>
                    <p className="text-gray-400">Fianarantsoa, Madagascar</p>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="icon" className="cursor-pointer bg-transparent">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="cursor-pointer bg-transparent">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="cursor-pointer bg-transparent">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                          <Input
                            className="bg-slate-700/50 border-slate-600 text-white cursor-pointer"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                          <Input
                            type="email"
                            className="bg-slate-700/50 border-slate-600 text-white cursor-pointer"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
                        <Input
                          className="bg-slate-700/50 border-slate-600 text-white cursor-pointer"
                          placeholder="Sujet de votre message"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <Textarea
                          className="bg-slate-700/50 border-slate-600 text-white min-h-[120px] cursor-pointer"
                          placeholder="Votre message..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Jean Mahery Rakotomalala. Tous droits réservés.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="https://linkedin.com/in/mahery-rakotomalala"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/maherygm"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  GitHub
                </a>
                <a
                  href="https://maheryrak.vercel.app"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
