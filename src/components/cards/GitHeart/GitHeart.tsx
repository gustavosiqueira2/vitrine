import Card from '../../Card'

import { heartShapes } from './heartShapes'

const GitHeart = () => (
  <Card>
    <div className="flex items-center justify-between">
      <span className="font-bold text-lg highlight-red w-fit mb-2">
        GitHeart
      </span>

      <a
        href="https://github.com/gustavosiqueira2/git-heart"
        target="_blank"
        className="underline text-sm text-gray-700"
      >
        see the code
      </a>
    </div>

    <div className="flex items-center h-full">
      <div className="flex flex-col gap-1">
        {heartShapes.map((day, di) => (
          <div key={`day_${di}`} className="flex gap-1">
            {day.map((isColored, hi) => (
              <div
                key={`day_${di}_heart_${hi}`}
                className={`h-4 w-4 rounded-sm ${
                  isColored ? 'bg-green-500' : 'bg-gray-100'
                } border border-gray-200`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </Card>
)

export default GitHeart
