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
    <div className="flex justify-center gap-2 w-full mb-3">
      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.ME)}
        className={CARD_BUTTON_CLASSES}
      >
        About Me
      </Card>

      <Card
        onClick={() => handleChangeSelectedCard(CARD_NAMES.PROJECTS)}
        className={CARD_BUTTON_CLASSES}
      >
        Projects
      </Card>
    </div>
  )
}

export default Buttons
