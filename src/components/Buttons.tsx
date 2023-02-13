import { CARD_NAMES } from '../utils/constants/CARD_NAMES'

import Card from './Card'

const CARD_BUTTON_CLASSES =
  'cursor-pointer w-full md:w-[85px] flex items-center select-none'

type ButtonsProps = {
  setSelectedCard: (str: CARD_NAMES) => void
}

const Buttons = ({ setSelectedCard }: ButtonsProps) => {
  const handleChangeSelectedCard = (cardName: CARD_NAMES) => {
    const card = document.getElementById(cardName)

    if (card) {
      card.scrollIntoView({ behavior: 'smooth' })
    }
    setSelectedCard(cardName)
  }

  return (
    <div className="flex gap-2 w-full">
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.SKILLS)}
        className={CARD_BUTTON_CLASSES}
      >
        Skills
      </Card>
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.LINKS)}
        className={CARD_BUTTON_CLASSES}
      >
        Links
      </Card>
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.PROJECTS)}
        className={CARD_BUTTON_CLASSES}
      >
        Projetos
      </Card>
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.CONTACT)}
        className={CARD_BUTTON_CLASSES}
      >
        Contato
      </Card>
    </div>
  )
}

export default Buttons
