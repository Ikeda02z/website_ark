import { motion } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiGit,
} from 'react-icons/si'
import { technologies } from '../../data/technologies'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'

const iconMap = {
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  python: SiPython,
  tailwind: SiTailwindcss,
  mongodb: SiMongodb,
  git: SiGit,
}

const iconColors = {
  react: '#61DAFB',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  nodejs: '#339933',
  python: '#3776AB',
  tailwind: '#06B6D4',
  mongodb: '#47A248',
  git: '#F05032',
}

export default function Technologies() {
  return (
    <section id="tech" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="// Habilidades"
          title="Tecnologías"
          subtitle="Herramientas que domino y sigo perfeccionando"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => {
            const Icon = iconMap[tech.icon]
            const color = iconColors[tech.icon]

            return (
              <ScrollReveal key={tech.name} delay={index * 0.05}>
                <GlassCard className="p-5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Icon size={22} style={{ color }} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-white">{tech.name}</h3>
                      <p className="font-mono text-xs text-gray-500">
                        {tech.level}%
                      </p>
                    </div>
                  </div>

                  <div className="relative h-2 rounded-full bg-void-800 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${color}80, ${color})`,
                        boxShadow: `0 0 10px ${color}40`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </GlassCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
