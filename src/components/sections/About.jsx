import { motion } from 'framer-motion'
import { siteConfig } from '../../data/config'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'

export default function About() {
  const { about } = siteConfig

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="// Empresa"
          title="Sobre nosotros"
          subtitle="Conoce la industria de software detrás de cada proyecto"
        />

        <ScrollReveal>
          <GlassCard className="relative corner-accent max-w-4xl mx-auto p-6 md:p-10">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-glass-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-neon-pink/60" />
                <span className="w-3 h-3 rounded-full bg-neon-teal/60" />
                <span className="w-3 h-3 rounded-full bg-neon-cyan/60" />
              </div>
              <span className="font-mono text-xs text-gray-500 ml-2 tracking-widest">
                COMPANY.SYS
              </span>
            </div>

            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div className="flex flex-col items-center md:items-start">
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-xl glass-panel border-2 border-neon-cyan/20 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10" />
                  <span className="font-display text-4xl md:text-5xl font-black neon-text relative z-10">
                    {siteConfig.initials}
                  </span>
                  <motion.div
                    className="absolute inset-0 border border-neon-cyan/30 rounded-xl"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <h3 className="font-display text-xl font-bold mt-4 text-center md:text-left">
                  {siteConfig.name}
                </h3>
                <p className="font-mono text-sm text-neon-cyan tracking-wider">
                  {siteConfig.title}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                    Especialidades
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {about.specialties.map((spec, i) => (
                      <motion.span
                        key={spec}
                        className="px-3 py-1.5 rounded-md bg-neon-cyan/10 border border-neon-cyan/20 text-sm text-neon-cyan font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                    Stack tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {about.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 rounded-md bg-neon-purple/10 border border-neon-purple/20 text-sm text-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                    Descripción
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{about.description}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
