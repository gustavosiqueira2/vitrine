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

      <div className="background sm:h-[calc(100% - 32px)] flex flex-col justify-center gap-6 p-2 pb-12 sm:p-4 md:p-8 overflow-y-auto">
        <Buttons setSelectedCard={setSelectedCard} />

        <div className="flex flex-wrap items-center justify-center gap-6 w-full">
          <Profile selected={selectedCard === CARD_NAMES.ME} />

          <div className="flex flex-col gap-6 w-full md:w-fit">
            <Skills selected={selectedCard === CARD_NAMES.SKILLS} />

            <Card>
              <span className="font-bold text-lg highlight-green w-fit">
                Tools
              </span>

              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Next</span>
                  <span>Tailwind</span>
                  <span>React Query</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>AWS</span>
                  <span>Firebase</span>
                  <span>Docker</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-fit">
            <Contact selected={selectedCard === CARD_NAMES.CONTACT} />

            <Links selected={selectedCard === CARD_NAMES.LINKS} />
          </div>
        </div>

        <div className="md:mb-12" />

        {projects.length > 0 && (
          <Projects
            projects={projects}
            selected={selectedCard === CARD_NAMES.PROJECTS}
          />
        )}

        <div className="w-full flex flex-wrap gap-6 justify-center">
          <Hourglass />

          <GitHeart />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
