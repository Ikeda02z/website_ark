import { FaGithub, FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com',
    icon: FaGithub,
    color: '#ffffff',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    url: 'https://tiktok.com',
    icon: FaTiktok,
    color: '#ff0050',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com',
    icon: FaInstagram,
    color: '#E4405F',
  },
  {
    id: 'email',
    label: 'Correo',
    url: 'mailto:contacto@gabrielvega.dev',
    icon: HiOutlineMail,
    color: '#00e5ff',
  },
]
