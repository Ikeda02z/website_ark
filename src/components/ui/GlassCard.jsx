import { motion } from 'framer-motion'

const accentColors = {
  cyan: 'from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-neon',
  purple:
    'from-neon-purple/20 to-neon-purple/5 border-neon-purple/20 hover:border-neon-purple/40 hover:shadow-neon-purple',
  default:
    'from-white/10 to-white/5 border-glass-border hover:border-neon-cyan/30',
}

export default function GlassCard({
  children,
  className = '',
  accent = 'default',
  hover = true,
  ...props
}) {
  const accentClass = accentColors[accent] || accentColors.default

  return (
    <motion.div
      className={`
        relative glass-panel rounded-xl overflow-hidden
        bg-gradient-to-br ${accentClass}
        ${hover ? 'transition-all duration-300' : ''}
        ${className}
      `}
      whileHover={
        hover
          ? { y: -4, transition: { duration: 0.3 } }
          : undefined
      }
      {...props}
    >
      <div className="absolute inset-0 scanline opacity-50" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
