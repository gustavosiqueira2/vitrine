import { CARD_NAMES } from '../../utils/constants/CARD_NAMES'

import Card from '../Card'

type ContactProps = {
  selected: boolean
}

const Contact = ({ selected }: ContactProps) => (
  <Card
    name={CARD_NAMES.CONTACT}
    wiggle={selected}
    className="w-full md:w-fit h-fit"
  >
    <span className="font-bold text-lg highlight-blue-green w-fit">
      Contato
    </span>

    <span>
      <b>Email:</b> gustavo.fariassiqueira@gmail.com
    </span>
    <span>
      <b>Telefone:</b> +55 (19) 99530-6810
    </span>
  </Card>
)

export default Contact
