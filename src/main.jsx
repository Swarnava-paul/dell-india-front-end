import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { store } from './app/ReduxStore/Store.jsx'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraBaseProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ChakraBaseProvider>
    </BrowserRouter>
  </StrictMode>,
)
