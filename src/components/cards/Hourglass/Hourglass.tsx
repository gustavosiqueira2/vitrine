import Card from '../../Card'
import runHourglass from './src'

const Hourglass = () => {
  const { hourglass, resetHourglass } = runHourglass()

  return (
    <Card className="w-fit">
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg highlight-blue w-fit mb-2">
          Ampulheta
        </span>

        <a
          href="https://github.com/gustavosiqueira2/Ampulheta"
          target="_blank"
          className="underline text-sm text-gray-700"
        >
          see the code
        </a>
      </div>

      <div className="flex flex-col bg-black rounded-md border-8 border-t-4 border-gray-800">
        <div className="flex items-center justify-between h-6 bg-gray-800 px-2">
          <div className="flex items-center gap-1 h-full">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <span
            onClick={() => resetHourglass()}
            className="text-gray-400 cursor-pointer underline text-sm"
          >
            reset
          </span>
        </div>

        <div className="flex flex-col p-2 px-4">
          {hourglass.map((line, i) => (
            <pre key={`hourglass_line_${i}`} className="text-green-600 text-sm">
              {line}
            </pre>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default Hourglass
