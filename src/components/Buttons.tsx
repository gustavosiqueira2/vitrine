import { CARD_NAMES } from '../utils/constants/CARD_NAMES'
import Card from './Card'

type ButtonsProps = {
  setSelectedCard: (str: CARD_NAMES) => void
}

const Buttons = ({ setSelectedCard }: ButtonsProps) => {
  const handleChangeSelectedCard = (cardName: CARD_NAMES) => {
    setSelectedCard(cardName)
  }

  return (
    <div className="flex gap-2 w-full">
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.SKILLS)}
        className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
      >
        Skills
      </Card>
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.LINKS)}
        className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
      >
        Links
      </Card>
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.PROJECTS)}
        className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
      >
        Projetos
      </Card>
      <Card
        onClick={() => () => handleChangeSelectedCard(CARD_NAMES.CONTACT)}
        className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
      >
        Contato
      </Card>
    </div>
  )
}

export default Buttons
