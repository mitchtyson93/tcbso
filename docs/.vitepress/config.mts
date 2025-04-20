import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Classical Ballet School of Oslo",
  description: "The Classical Ballet School Of Oslo",
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Classes', link: '/classes' },
      { text: 'Registration', link: '/registration' },
      { text: 'Studio & Policies', link: '/studio-policies' },
      { text: 'Contact', link: '/contact' },
    ],
    logo: '/assets/logo.png',
    footer: {
      message: 'The Classical Ballet School of Oslo',
      copyright: 'Email us at post@theclassicalballetschool.no'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/theclassicalballetschoolofoslo/' },
    ]
  }
})
