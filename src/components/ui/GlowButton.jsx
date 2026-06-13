import { motion } from 'framer-motion'

const variants = {
  primary: `
    bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20
    border border-neon-cyan/40 text-white
    hover:from-neon-cyan/30 hover:to-neon-purple/30
    hover:border-neon-cyan/60 hover:shadow-neon
  `,
  secondary: `
    bg-glass-light border border-glass-border text-gray-300
    hover:border-neon-cyan/30 hover:text-white hover:bg-glass-medium
  `,
  ghost: `
    bg-transparent border border-neon-cyan/30 text-neon-cyan
    hover:bg-neon-cyan/10 hover:border-neon-cyan/50
  `,
}

export default function GlowButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const baseClass = `
    relative inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-lg font-body font-semibold text-sm
    tracking-wide uppercase transition-all duration-300
    overflow-hidden group
    ${variants[variant]}
    ${className}
  `

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
