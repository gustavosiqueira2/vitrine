import Card from '../Card'

const Tools = () => (
  <Card>
    <span className="font-bold text-lg highlight-yellow w-fit">Tools</span>

    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <span>Next</span>
        <span>Tailwind</span>
        <span>React Query</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <span>AWS</span>
        <span>Firebase</span>
        <span>Docker</span>
      </div>
    </div>
  </Card>
)

export default Tools
