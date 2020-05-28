import { GatsbyNode } from 'gatsby'

const config: GatsbyNode = {
  onPostBootstrap: (args) => {
    console.log('hello there gatsby node', args)
  },
}
export default config
