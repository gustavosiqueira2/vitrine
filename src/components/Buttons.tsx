import Card from './Card'

type ButtonsProps = {
  selectedCard: string
  setSelectedCard: (str: string) => void
}

const Buttons = ({ selectedCard, setSelectedCard }: ButtonsProps) => (
  <div className="flex gap-2 w-full">
    <Card
      selected={selectedCard === 'skills'}
      onClick={() => setSelectedCard(selectedCard === 'skills' ? '' : 'skills')}
      className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
    >
      Skills
    </Card>
    <Card
      selected={selectedCard === 'links'}
      onClick={() => setSelectedCard(selectedCard === 'links' ? '' : 'links')}
      className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
    >
      Link
    </Card>
    <Card
      selected={selectedCard === 'projetos'}
      onClick={() =>
        setSelectedCard(selectedCard === 'projetos' ? '' : 'projetos')
      }
      className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
    >
      Projetos
    </Card>
    <Card
      selected={selectedCard === 'contato'}
      onClick={() =>
        setSelectedCard(selectedCard === 'contato' ? '' : 'contato')
      }
      className="cursor-pointer w-full md:w-[85px] flex items-center select-none"
    >
      Contato
    </Card>
  </div>
)

export default Buttons
