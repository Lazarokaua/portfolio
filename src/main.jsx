import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import { LanguageProvider } from './components/Utils/LanguageContext'
import { ScrollToTop } from './components/Utils/ScrollToTop'
import { ReadingProgress } from './components/Utils/ReadingProgress'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ReadingProgress />
      <App />
      <ScrollToTop />
    </LanguageProvider>
  </React.StrictMode>
)
