import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header/Header.jsx'
import { Headline } from './components/Header/Headline.jsx'
import { Experience } from './components/Experience/Experience.jsx'
import { Tech } from './components/Technologies/Tech.jsx'
import { Project } from './components/Projects/Project.jsx'
import { Why } from './components/WorkWithMe/Why.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { LanguageProvider } from './components/Utils/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <Header />
      <Headline />
      <Experience />
      <Tech />
      <Project />
      <Why />
      <Footer />
    </LanguageProvider>
  </StrictMode>
)
