/**
 * Imports
 */
// Types
import type { ToolboxType } from '@/types/ToolboxType'

interface ToolboxToolsPropType {
  toolbox: ToolboxType
}

export default function ToolboxTools({ toolbox }: ToolboxToolsPropType) {
  /**
   * Constants
   */
  const { title, list } = toolbox

  return (
    <div>
      {/* Title */}
      <div className="text-2xl md:text-3xl mb-2 font-bold">
        {title}
      </div>

      {/* Skills */}
      <div className="text-xl md:text-2xl flex flex-wrap">
        {list.map(({ skill, isPro }, index) => (
          <div
            key={skill}
            className={`mr-2 ${ !isPro ? 'opacity-50' : '' }`}
          >
            {skill}
            {index < (list.length - 1) && <span>,</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
