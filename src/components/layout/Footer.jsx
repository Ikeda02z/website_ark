import { motion } from 'framer-motion'
import { siteConfig } from '../../data/config'
import { socialLinks } from '../../data/social'

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border bg-void-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold neon-text">
              {siteConfig.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1 font-mono tracking-wider">
              {siteConfig.title}
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan/30 transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="hud-line my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; 2026 {siteConfig.name}. Todos los derechos reservados.</p>
          <p className="font-mono text-xs tracking-widest text-gray-600">
            SYS.STATUS: ONLINE
          </p>
        </div>
      </div>
    </footer>
  )
}
