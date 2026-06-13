import { motion } from 'framer-motion'
import { socialLinks } from '../../data/social'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

export default function Social() {
  return (
    <section id="social" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="// Conexión"
          title="Redes sociales"
          subtitle="Síguenos en nuestras plataformas oficiales"
        />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col items-center gap-3 min-w-[120px] md:min-w-[140px] transition-all duration-300 group-hover:border-neon-cyan/30 group-hover:shadow-neon">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${social.color}15`,
                        boxShadow: `0 0 20px ${social.color}20`,
                      }}
                    >
                      <Icon size={28} style={{ color: social.color }} />
                    </div>
                    <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </div>

                  <motion.div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${social.color}30, transparent)`,
                    }}
                  />
                </motion.a>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
