import { motion } from 'framer-motion'
import { HiArrowDown, HiChevronRight } from 'react-icons/hi'
import { siteConfig } from '../../data/config'
import GlowButton from '../ui/GlowButton'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[min(90vw,700px)] h-[min(90vw,700px)] rounded-full border border-neon-cyan/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[min(70vw,500px)] h-[min(70vw,500px)] rounded-full border border-neon-purple/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-teal animate-pulse" />
          <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">
            Sistema iniciado — v1.0.0
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="neon-text text-glow">{siteConfig.name}</span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-cyan/50" />
          <p className="font-mono text-neon-cyan text-sm md:text-base tracking-[0.4em] uppercase">
            {siteConfig.title}
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-cyan/50" />
        </motion.div>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {siteConfig.slogan}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GlowButton href="#projects" variant="primary">
            Ver proyectos
            <HiChevronRight className="text-lg" />
          </GlowButton>
          <GlowButton href="#contact" variant="secondary">
            Contactar
          </GlowButton>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { label: 'Proyectos', value: '10+' },
            { label: 'Tecnologías', value: '8+' },
            { label: 'Experiencia', value: '2yr' },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel p-3 rounded-lg">
              <p className="font-display text-xl md:text-2xl font-bold text-neon-cyan">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-neon-cyan transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll hacia abajo"
      >
        <HiArrowDown size={24} />
      </motion.a>
    </section>
  )
}
