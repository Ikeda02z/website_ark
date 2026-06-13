import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMail, HiOutlineUser, HiOutlineChat } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'
import GlowButton from '../ui/GlowButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  const inputClass =
    'w-full bg-void-800/50 border border-glass-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all font-body'

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          tag="// Comunicación"
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos"
        />

        <ScrollReveal>
          <GlassCard className="relative corner-accent p-6 md:p-10">
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-glass-border">
              <span className="font-mono text-xs text-gray-500 tracking-widest">
                MSG.FORM — ENCRIPTADO
              </span>
              <motion.span
                className="ml-auto w-2 h-2 rounded-full bg-neon-teal"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2 font-mono">
                  <HiOutlineUser />
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2 font-mono">
                  <HiOutlineMail />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2 font-mono">
                  <HiOutlineChat />
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-2">
                <GlowButton
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </GlowButton>
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    className="text-neon-teal text-sm font-mono flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-neon-teal" />
                    Mensaje enviado correctamente. Te responderé pronto.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
