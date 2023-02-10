import { links } from './assets/links'
import { skills } from './assets/skills'
import Card from './components/Card'

import me from './assets/me.jpg'
import { useState } from 'react'

const App = () => {
  const [selectedCard, setSelectedCard] = useState('')

  return (
    <div className="background w-full h-full flex flex-col flex-wrap gap-6 p-2 sm:p-4 md:p-8 lg:p-12 bg-[#ff4343] ">
      <div className="flex gap-2 mb-2">
        <Card
          selected={selectedCard === 'sobre'}
          onClick={() =>
            setSelectedCard(selectedCard === 'sobre' ? '' : 'sobre')
          }
          className="cursor-pointer w-[65px] flex items-center select-none"
        >
          Sobre
        </Card>
        <Card
          selected={selectedCard === 'skills'}
          onClick={() =>
            setSelectedCard(selectedCard === 'skills' ? '' : 'skills')
          }
          className="cursor-pointer w-[65px] flex items-center select-none"
        >
          Skills
        </Card>
        <Card
          selected={selectedCard === 'links'}
          onClick={() =>
            setSelectedCard(selectedCard === 'links' ? '' : 'links')
          }
          className="cursor-pointer w-[65px] flex items-center select-none"
        >
          Link
        </Card>
      </div>

      <div className="flex flex-wrap gap-6">
        <Card>
          <div className="h-52 w-52 rounded-xl mb-2 overflow-hidden">
            <img src={me} className="h-52 w-52" />
          </div>

          <div className="flex justify-between items-center gap-8 font-bold text-gray-900 mb-2">
            <span className="highlight-green text-lg">Gustavo Siqueira</span>

            <span>23 yo</span>
          </div>

          <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 px-2 bg-[#4eff8a] rounded-md border-2 border-black font-semibold text-sm">
            Front end Dev
          </div>
        </Card>

        <Card selected={selectedCard === 'sobre'} className="w-[300px]">
          <div>
            <span className="font-bold text-lg w-fit mb-1 highlight-yellow">
              Sobre mim
            </span>
          </div>

          <span>
            Atuando como Desenvolvedor Front End / Mobile especializado em
            Typescript, principalmente com os frameworks React e React Native,
            sempre trabalhando focado nos resultados e compartilhando
            conhecimento e experiências ao longo da minha jornada.
          </span>
        </Card>
      </div>

      <Card selected={selectedCard === 'skills'} className="w-[228px]">
        <div className="flex items-center justify-between gap-12 text-sm">
          <span className="font-bold text-lg highlight-yellow">Skills</span>

          <span>years</span>
        </div>

        {skills.map(({ name, years, isBest }) => (
          <div
            key={`skill_${name}`}
            className="flex items-center justify-between gap-12 text-sm"
          >
            <span className="font-bold text-gray-900">
              {name} {isBest && '🌟'}
            </span>
            <span className="">{years}</span>
          </div>
        ))}
      </Card>

      <Card selected={selectedCard === 'links'} className="w-[228px]">
        <div>
          <span className="font-bold text-lg highlight-red w-fit">Links</span>
        </div>

        {links.map(({ name, link }) => (
          <div key={`link_${name}`}>
            <a href={link} target="_blank">
              {name}
            </a>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default App
