import { CARD_NAMES } from '../../utils/constants/CARD_NAMES'
import { links } from '../../utils/assets/links'

import Card from '../Card'

type LinksProps = {
  selected: boolean
}

const Links = ({ selected }: LinksProps) => (
  <Card name={CARD_NAMES.CONTACT} wiggle={selected} className="min-w-[240px]">
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
