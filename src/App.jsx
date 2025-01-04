import { Header } from './components/Header/Header'
import { Headline } from './components/Header/Headline'
import { Experience } from './components/Experience/Experience'
import { Tech } from './components/Technologies/Tech'
import { Project } from './components/Projects/Project'
import { Why } from './components/WorkWithMe/Why'
import { Footer } from './components/Footer/Footer'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <>
      <Header />
      <Headline />
      <Experience />
      <Tech />
      <Project />
      <Why />
      <Footer />
      <SpeedInsights />
    </>
  )
}

export default App 