import { CARD_NAMES } from '../../utils/constants/CARD_NAMES'

import Card from '../Card'

type ProjectsProps = {
  selected: boolean
  projects: any[]
}

const Projects = ({ selected, projects }: ProjectsProps) => (
  <Card
    name={CARD_NAMES.PROJECTS}
    wiggle={selected}
    className="w-full md:w-fit h-fit self-center"
  >
    <span className="font-bold text-lg highlight-blue w-fit">
      Projetos favoritos
    </span>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
      {projects.map(({ name, description, url }) => (
        <div key={`project_${name}`} className="flex flex-col w-fit">
          <span className="font-bold text-gray-900">{name}</span>
          <span className="text-gray-700">{description}</span>
        </div>
      ))}
    </div>

    <a
      href="https://github.com/gustavosiqueira2"
      target="_blank"
      className="self-end underline cursor-pointer"
    >
      ver mais
    </a>
  </Card>
)

export default Projects
