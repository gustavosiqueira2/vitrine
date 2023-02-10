import { links } from '../assets/links'
import Card from '../components/Card'

const Links = ({ selectedCard }: { selectedCard: string }) => (
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
)

export default Links
