import { useState } from 'react'

import Skills from './components/cards/Skills'
import Links from './components/cards/Links'
import Profile from './components/cards/Profile'
import Contact from './components/cards/Contact'

import ScreenBackgroundFade from './components/ScreenBackgroundFade'
import PresentationScreen from './components/PresentationScreen'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import { useProjects } from './utils/hooks/useProjects'
import { CARD_NAMES } from './utils/constants/CARD_NAMES'
import Projects from './components/cards/Project'

const App = () => {
  const { isLoadingProjects, projects } = useProjects()

  const [isPresenting, setIsPresenting] = useState(true)

  const [selectedCard, setSelectedCard] = useState<CARD_NAMES | ''>('')

  if (isLoadingProjects || isPresenting) {
    if (!isLoadingProjects) {
      setTimeout(() => {
        setIsPresenting(false)
      }, 3000)
    }

    return <PresentationScreen />
  }

  return (
    <>
      <ScreenBackgroundFade />

      <div className="background sm:h-[calc(100% - 32px)] flex flex-col md:flex-row flex-wrap items-start justify-start gap-6 p-2 pb-12 sm:p-4 md:p-8 lg:p-12 overflow-y-auto">
        <Buttons setSelectedCard={setSelectedCard} />

        <div className="flex flex-col gap-6">
          <Profile />

          <Skills selected={selectedCard === CARD_NAMES.SKILLS} />

          <Links selected={selectedCard === CARD_NAMES.LINKS} />
        </div>

        {projects.length > 0 && (
          <Projects
            projects={projects}
            selected={selectedCard === CARD_NAMES.PROJECTS}
          />
        )}

        <Contact selected={selectedCard === CARD_NAMES.CONTACT} />
      </div>

      <Footer />
    </>
  )
}

export default App
