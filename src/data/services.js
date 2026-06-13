import {
  FiGlobe,
  FiLayout,
  FiCpu,
  FiMessageSquare,
  FiServer,
} from 'react-icons/fi'

export const services = [
  {
    id: 1,
    title: 'Landing Pages',
    description:
      'Páginas de aterrizaje impactantes diseñadas para captar atención y convertir visitantes.',
    icon: FiLayout,
    accent: 'cyan',
  },
  {
    id: 2,
    title: 'Sitios Web',
    description:
      'Sitios completos, responsivos y optimizados con las últimas tecnologías web.',
    icon: FiGlobe,
    accent: 'purple',
  },
  {
    id: 3,
    title: 'Automatizaciones',
    description:
      'Flujos de trabajo automatizados que ahorran tiempo y eliminan tareas repetitivas.',
    icon: FiCpu,
    accent: 'teal',
  },
  {
    id: 4,
    title: 'Bots',
    description:
      'Bots inteligentes para Discord, Telegram y otras plataformas con funciones a medida.',
    icon: FiMessageSquare,
    accent: 'pink',
  },
  {
    id: 5,
    title: 'APIs',
    description:
      'APIs robustas y documentadas para conectar sistemas y potenciar aplicaciones.',
    icon: FiServer,
    accent: 'blue',
  },
]
