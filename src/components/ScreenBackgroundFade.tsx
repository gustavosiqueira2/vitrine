import { useState } from 'react'

const ScreenBackgroundFade = () => {
  const [isPresenting, setIsPresenting] = useState(true)

  setTimeout(() => {
    setIsPresenting(false)
  }, 400)

  if (!isPresenting) {
    return <></>
  }

  return <div className="screenfade absolute w-full h-full z-10"></div>
}

export default ScreenBackgroundFade
