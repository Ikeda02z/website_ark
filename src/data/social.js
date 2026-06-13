import { FaGithub, FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/darkcorp-industries',
    icon: FaGithub,
    color: '#ffffff',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/company/darkcorp-industries',
    icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    url: 'https://tiktok.com/@darkcorpindustries',
    icon: FaTiktok,
    color: '#ff0050',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com/darkcorpindustries',
    icon: FaInstagram,
    color: '#E4405F',
  },
  {
    id: 'email',
    label: 'Correo',
    url: 'mailto:contacto@darkcorp.com',
    icon: HiOutlineMail,
    color: '#00e5ff',
  },
]
