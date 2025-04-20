import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Classical Ballet School of Oslo",
  description: "The Classical Ballet School Of Oslo",
  appearance: false,
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
    footer: {
      message: 'The Classical Ballet School of Oslo',
      copyright: 'Copyright © 2025 The Classical Ballet School of Oslo'
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
