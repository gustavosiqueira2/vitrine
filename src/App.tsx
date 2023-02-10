import { links } from './assets/links'
import { skills } from './assets/skills'
import Card from './components/Card'

import me from './assets/me.jpg'
import { useState } from 'react'
import Buttons from './components/Buttons'

const App = () => {
  const [selectedCard, setSelectedCard] = useState('')

  return (
    <div className="background sm:h-full flex flex-col md:flex-row flex-wrap gap-6 p-2 pb-12 sm:p-4 md:p-8 lg:p-12 bg-[#ff4343] overflow-y-auto">
      <Buttons selectedCard={selectedCard} setSelectedCard={setSelectedCard} />

      <div className="flex flex-col gap-6">
        <Card className="md:w-[300px]">
          <div className="h-52 w-52 rounded-xl mb-2 overflow-hidden">
            <img src={me} className="h-52 w-52" />
          </div>

          <div className="flex justify-between items-center gap-8 font-bold text-gray-900">
            <span className="highlight-green text-lg">Gustavo Siqueira</span>

            <span>23 yo</span>
          </div>

          <span className="mb-2 text-gray-700">
            Atuando como Desenvolvedor Front End / Mobile especializado em
            Typescript, principalmente com os frameworks React e React Native,
            sempre trabalhando focado nos resultados e compartilhando
            conhecimento e experiências ao longo da minha jornada.
          </span>

          <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 px-2 bg-[#4eff8a] rounded-md border-2 border-black font-semibold text-sm">
            Front end Dev
          </div>
        </Card>

        <Card selected={selectedCard === 'skills'} className="md:w-[300px]">
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

        <Card selected={selectedCard === 'links'} className="md:w-[300px]">
          <span className="font-bold text-lg highlight-red w-fit">Links</span>

          {links.map(({ name, link }) => (
            <div key={`link_${name}`}>
              <a href={link} target="_blank">
                {name}
              </a>
            </div>
          ))}
        </Card>
      </div>

      <Card selected={selectedCard === 'projetos'}>
        <span className="font-bold text-lg highlight-blue w-fit">Projetos</span>
      </Card>

      <Card selected={selectedCard === 'contato'} className="h-fit">
        <span className="font-bold text-lg highlight-blue-green w-fit">
          Contato
        </span>

        <span>
          <b>Email:</b> gustavo.fariassiqueira@gmail.com
        </span>
        <span>
          <b>Telefone:</b> +55 (19) 99530-6810
        </span>
        <span>
          <b>Linkedin:</b> https://www.linkedin.com/in/gustavofariasdesiqueira/
        </span>
      </Card>
    </div>
  )
}

export default App
