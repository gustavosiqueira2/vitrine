import { useState } from 'react'

import { CARD_NAMES } from './utils/constants/CARD_NAMES'
import { useProjects } from './utils/hooks/useProjects'

import Hourglass from './components/cards/Hourglass/Hourglass'
import Projects from './components/cards/Project'
import Profile from './components/cards/Profile'
import Contact from './components/cards/Contact'
import Skills from './components/cards/Skills'
import Links from './components/cards/Links'

import ScreenBackgroundFade from './components/ScreenBackgroundFade'
import PresentationScreen from './components/PresentationScreen'
import Buttons from './components/Buttons'
import Footer from './components/Footer'

import Card from './components/Card'
import GitHeart from './components/cards/GitHeart/GitHeart'
import Tools from './components/cards/Tools'

const App = () => {
  const { isLoadingProjects, projects } = useProjects()

  const [isPresenting, setIsPresenting] = useState(true)

  const [selectedCard, setSelectedCard] = useState<CARD_NAMES | ''>('')

  if (isLoadingProjects || isPresenting) {
    if (!isLoadingProjects) {
      setTimeout(() => {
        setIsPresenting(false)
      }, 4000)
    }

    return <PresentationScreen />
  }

  return (
    <>
      <ScreenBackgroundFade />

      <div className="background sm:h-[calc(100% - 32px)] flex flex-col justify-center gap-6 md:pt-14 pb-8 overflow-y-auto">
        <Buttons setSelectedCard={setSelectedCard} />

        <div className="mb-4 md:mb-8 flex flex-wrap items-center justify-center gap-6 w-full px-4">
          <Profile selected={selectedCard === CARD_NAMES.ME} />

          <div className="flex flex-col gap-6 w-full md:w-fit">
            <Skills selected={selectedCard === CARD_NAMES.SKILLS} />

            <Tools />
          </div>
        </div>

        <div className="mb-4 md:mb-8 background-secondary w-full flex flex-wrap justify-center gap-6 px-4 py-8 border-b-[6px] border-t-[6px] border-black">
          <Contact selected={selectedCard === CARD_NAMES.CONTACT} />

          <Links selected={selectedCard === CARD_NAMES.CONTACT} />
        </div>

        <div className="px-4 flex justify-center">
          {projects.length > 0 && (
            <Projects
              projects={projects}
              selected={selectedCard === CARD_NAMES.PROJECTS}
            />
          )}
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 px-4">
          <Hourglass />

          <GitHeart />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
