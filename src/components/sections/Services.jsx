import { motion } from 'framer-motion'
import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'

const accentStyles = {
  cyan: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20',
  purple: 'text-neon-purple bg-neon-purple/10 border-neon-purple/20',
  teal: 'text-neon-teal bg-neon-teal/10 border-neon-teal/20',
  pink: 'text-neon-pink bg-neon-pink/10 border-neon-pink/20',
  blue: 'text-neon-blue bg-neon-blue/10 border-neon-blue/20',
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="// Servicios"
          title="Nuestros servicios"
          subtitle="Soluciones digitales adaptadas a las necesidades de tu negocio"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const accentClass = accentStyles[service.accent]

            return (
              <ScrollReveal key={service.id} delay={index * 0.08}>
                <GlassCard
                  accent={service.accent === 'blue' ? 'cyan' : service.accent}
                  className="p-6 h-full group"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${accentClass}`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon size={22} />
                  </motion.div>

                  <h3 className="font-display text-lg font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-mono text-gray-600 group-hover:text-neon-cyan/60 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    DISPONIBLE
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
