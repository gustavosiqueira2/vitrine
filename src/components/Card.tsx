type CardProps = {
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  selected?: boolean
  onClick?: () => void
}

const Card = ({ children, selected, onClick, className }: CardProps) => (
  <div
    onClick={onClick}
    style={{
      borderColor: selected ? '#4b43ff' : 'black',
      boxShadow: `3px 4px 0px black`
    }}
    className={`${
      className || ''
    } card relative flex flex-col p-2 rounded-2xl border-2 border-black`}
  >
    {children}
  </div>
)

export default Card
