import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sam Rodriguez — Leadership & Systems Coaching',
    short_name: 'Sam Rodriguez',
    description: 'Helping leaders build clarity, systems, and momentum through honest coaching and practical habits.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0E0E0E',
    theme_color: '#E1C85C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

