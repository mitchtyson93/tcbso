import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme

// Add custom styles
import { h } from 'vue'

export const Layout = () => {
  return h(DefaultTheme.Layout, null, {
    // Add custom slots here if needed
  })
} 