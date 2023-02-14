const renderHourglass = (
  maxLines: number,
  lineState: boolean[],
  array: string[]
) => {
  for (let line = 1; line <= maxLines; line++) {
    renderLine(line, maxLines, lineState, array)
  }
}

const renderLine = (
  line: number,
  maxLines: number,
  lineState: boolean[],
  array: string[]
) => {
  if (line === 1) {
    array.push('╔═' + '══'.repeat(maxLines - 2) + '═╗')
  } else if (line === maxLines) {
    array.push('╚═' + '══'.repeat(maxLines - 2) + '═╝')
  } else {
    renderCell(line, maxLines, lineState[line], array)
  }
}

const renderCell = (
  line: number,
  maxLines: number,
  isSand: boolean,
  array: string[]
) => {
  if (line > maxLines / 2) {
    const isImpar = maxLines % 2

    const outsideSpace = maxLines - line - 1
    const middleSpace =
      (Math.floor(maxLines / 2) - line + 1) * -2 - (isImpar ? 1 : 0)

    array.push(
      '║ ' +
        '  '.repeat(outsideSpace) +
        '╱ ' +
        `${isSand ? 'ss' : '  '}`.repeat(middleSpace >= 0 ? middleSpace : 0) +
        ' ╲'.repeat(middleSpace < 0 ? 0 : 1) +
        '  '.repeat(outsideSpace) +
        ' ║'
    )
  } else {
    const outsideSpace = line - 2
    const middleSpace = maxLines - line * 2

    array.push(
      '║ ' +
        '  '.repeat(outsideSpace) +
        '╲ ' +
        `${isSand ? 'ss' : '  '}`.repeat(middleSpace) +
        ' ╱' +
        '  '.repeat(outsideSpace) +
        ' ║'
    )
  }
}

export default renderHourglass
