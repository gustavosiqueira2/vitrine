import { CARD_NAMES } from '../utils/constants/CARD_NAMES'

type CardProps = {
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  onClick?: () => void
  wiggle?: boolean
  name?: CARD_NAMES
}

const Card = (props: CardProps) => {
  const { name, className, wiggle, onClick, children } = props

  const fullClassName = `${
    className || ''
  } card relative flex flex-col p-2 rounded-2xl border-2 border-black`

  return (
    <div
      id={name}
      style={{ boxShadow: `3px 4px 0px black` }}
      className={`${fullClassName} ${wiggle ? 'wiggle' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
