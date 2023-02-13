import { links } from '../../utils/assets/links'
import Card from '../Card'

type LinksProps = {
  selected: boolean
}

const Links = ({ selected }: LinksProps) => (
  <Card wiggle={selected} className="md:w-[300px]">
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
