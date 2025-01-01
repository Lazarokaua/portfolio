import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header.jsx'
import { Headline } from './components/Headline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header />
  <Headline />
  </StrictMode>
)
