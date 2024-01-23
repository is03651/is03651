import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-ES',
  title: "Página personal",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Currículum', link: '/curriculum' },
      { text: 'Proyectos', link: '/proyectos/' },
      { text: 'Servicios', link: '/servicios' },
      { text: 'Tecnologías', link: '/tecnologias' },
    ],

    sidebar: [
      {
        text: 'Menú general',
        items: [
          { text: 'Currículum', link: '/curriculum' },
          { text: 'Servicios', link: '/servicios' },
          { text: 'Tecnologías', link: '/tecnologias' },
        ]
      },
      {
        text: 'Proyectos',
        items: [
          { text: 'Introducción', link: '/proyectos/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outlineTitle: 'En esta página',
    
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    }
  }
})
