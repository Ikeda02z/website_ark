import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../../data/projects'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'
import GlowButton from '../ui/GlowButton'

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="// Portafolio"
          title="Proyectos"
          subtitle="Explora mis creaciones digitales"
        />

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <GlassCard className="group h-full flex flex-col overflow-hidden">
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono bg-void-950/70 backdrop-blur-sm border border-glass-border rounded text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <GlowButton
                      href={project.demoUrl}
                      variant="ghost"
                      className="flex-1 !px-4 !py-2 !text-xs"
                    >
                      <FiExternalLink />
                      Demo
                    </GlowButton>
                    <GlowButton
                      href={project.githubUrl}
                      variant="secondary"
                      className="flex-1 !px-4 !py-2 !text-xs"
                    >
                      <FiGithub />
                      GitHub
                    </GlowButton>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
