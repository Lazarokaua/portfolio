import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header/Header.jsx'
import { Headline } from './components/Header/Headline.jsx'
import { Experience } from './components/Experience/Experience.jsx'
import { Tech } from './components/Technologies/Tech.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header />
  <Headline />
  <Experience />
  <Tech />
  </StrictMode>
)
