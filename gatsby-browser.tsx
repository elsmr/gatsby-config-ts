import { GatsbyBrowser } from 'gatsby'
import './src/fonts/fonts.css'

const config: GatsbyBrowser = {
  wrapPageElement: ({ element, props }) => {
    return <table {...props}>{element}</table>
  },
}

export default config
