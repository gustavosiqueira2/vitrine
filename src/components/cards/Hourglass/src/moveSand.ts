const moveSand = (
  lineState: boolean[],
  setLineState: (arr: boolean[]) => void
) => {
  const lineControlArray: boolean[] = JSON.parse(JSON.stringify(lineState))

  const firstSandIndex = lineControlArray.findIndex((item) => item)

  lineControlArray[firstSandIndex] && (lineControlArray[firstSandIndex] = false)

  const lastSpaceIndex = lineControlArray.reverse().findIndex((item) => !item)

  !lineControlArray[firstSandIndex] && (lineControlArray[lastSpaceIndex] = true)

  lineControlArray.reverse()

  setLineState(lineControlArray)
}

export default moveSand
