type CardProps = {
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  onClick?: () => void
  wiggle?: boolean
}

const Card = (props: CardProps) => {
  const { children, onClick, className, wiggle } = props

  return (
    <div
      onClick={onClick}
      style={{
        boxShadow: `3px 4px 0px black`
      }}
      className={`${className || ''} ${
        wiggle ? 'wiggle' : ''
      } card relative flex flex-col p-2 rounded-2xl border-2 border-black`}
    >
      {children}
    </div>
  )
}

export default Card
