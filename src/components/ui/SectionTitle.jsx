import { motion } from 'framer-motion'

export default function SectionTitle({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-14 md:mb-16">
      <motion.span
        className="inline-block font-mono text-xs md:text-sm text-neon-cyan tracking-[0.3em] uppercase mb-3"
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {tag}
      </motion.span>
      <motion.h2
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold neon-text mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <div className="hud-line max-w-xs mx-auto mt-6" />
    </div>
  )
}
