import Card from './components/Card'

import { useEffect, useRef, useState } from 'react'
import Buttons from './components/Buttons'
import Skills from './cards/Skills'
import Links from './cards/Links'
import Profile from './cards/Profile'
import Contact from './cards/Contact'
import Footer from './components/Footer'

const App = () => {
  const [selectedCard, setSelectedCard] = useState('')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const isFetching = useRef(false)

  const getRepos = async () => {
    try {
      isFetching.current = true

      const response = await fetch(
        'https://api.github.com/users/gustavosiqueira2/repos'
      )

      const body: [] = await response.json()

      const pinnedRepos = body.filter(
        ({ name }) =>
          name === 'git-heart' ||
          name === 'Ampulheta' ||
          name === 'json-server-data-generator' ||
          name === 'rolldice'
      )

      setProjects(pinnedRepos)
    } catch (err) {
      console.log(err)
      setProjects([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isFetching.current) {
      getRepos()
    }
  }, [])

  if (loading) {
    return <div>carregando</div>
  }

  return (
    <>
      <div className="background sm:h-[calc(100% - 32px)] flex flex-col md:flex-row flex-wrap items-start justify-start gap-6 p-2 pb-12 sm:p-4 md:p-8 lg:p-12 bg-[#ff4343] overflow-y-auto">
        <Buttons
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />

        <div className="flex flex-col gap-6">
          <Profile />

          <Skills selectedCard={selectedCard} />

          <Links selectedCard={selectedCard} />
        </div>

        {projects.length > 0 && (
          <Card selected={selectedCard === 'projetos'}>
            <span className="font-bold text-lg highlight-blue w-fit">
              Projetos
            </span>

            {projects.map(({ name, description, url }) => (
              <div key={`project_${name}`} className="flex flex-col mb-2">
                <span className="font-bold text-gray-900">{name}</span>
                <span className="text-gray-700">{description}</span>
              </div>
            ))}

            <span className="self-end underline cursor-pointer">ver mais</span>
          </Card>
        )}

        <Contact selectedCard={selectedCard} />
      </div>

      <Footer />
    </>
  )
}

export default App
