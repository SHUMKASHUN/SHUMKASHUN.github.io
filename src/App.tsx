import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Layout from './components/Layout'
import Home from './components/Home'
import './styles/globals.css'
import './i18n'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  )
}

export default App
