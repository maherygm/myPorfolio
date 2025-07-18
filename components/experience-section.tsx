"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Développeur Front-End",
    company: "Acces Banques Madagascar",
    period: "Juillet 2024 - Actuellement",
    location: "Fianarantsoa, Madagascar",
    description: [
      "Développement et optimisation des interfaces des applications comptables et financières internes",
      "Responsable du développement et de l'intégration des API",
      "Assurer la conformité des systèmes avec la réglementation locale et internationale",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "API Integration"],
  },
  {
    title: "Développeur Front-End / Designer UI UX",
    company: "SuperNova Team",
    period: "2023-2024",
    location: "Madagascar",
    description: [
      "Conception et développement d'interfaces utilisateurs modernes et intuitives",
      "Refonte et optimisation de l'expérience utilisateur",
      "Participation à des hackathons pour développer des solutions innovantes",
    ],
    technologies: ["React", "Angular", "UI/UX", "Figma"],
  },
  {
    title: "Développeur Full Stack",
    company: "Royal Espace Fianarantsoa",
    period: "2024",
    location: "Fianarantsoa, Madagascar",
    description: [
      "Développement et maintenance d'une application de gestion de location de salles",
      "Amélioration des fonctionnalités existantes pour optimiser la gestion des réservations",
      "Intégration de nouvelles fonctionnalités pour faciliter l'administration",
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL", "Express"],
  },
  {
    title: "Hackathon Winner - 2ème place",
    company: "Hack Master",
    period: "2024",
    location: "Madagascar",
    description: [
      "Participation au hackathon avec la présence d'Orange et Airtel",
      "Développement front-end en charge de l'interface utilisateur",
      "Récompensé 2ème place grâce à l'innovation et la qualité du développement",
    ],
    technologies: ["React", "TypeScript", "UI/UX", "Innovation"],
  },
]

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Expérience Professionnelle</h2>
          <p className="text-xl text-gray-300">Mon parcours professionnel et mes réalisations</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="cursor-pointer">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-300 mb-4">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-blue-400" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-green-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {tech}
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
  )
}
