import { skills } from '../assets/skills'
import Card from '../components/Card'

const Skills = ({ selectedCard }: { selectedCard: string }) => (
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
)

export default Skills
