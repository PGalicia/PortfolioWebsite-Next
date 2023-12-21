/**
 * Imports
 */
// Constants
import { TOOLBOX } from '@/constants/Toolbox'

// Components
import LabelDefault from '@/components/LabelDefault'
import ToolboxTools from '@/components/ToolboxTools'

// Types
import type { DefaultPropType } from '@/types/DefaultPropType'

export default function ToolboxDefault({ className = '' }: DefaultPropType) {
  return (
    <div
      id="toolbox"
      className={className}
    >
      {/* Label */}
      <LabelDefault
        className="mb-12"
        label="My Toolbox"
      />

      {/* Skills */}
      <div className="flex flex-col gap-8">
        {TOOLBOX.map((tool, index) => (
          <ToolboxTools
            key={index}
            toolbox={tool}
          />
        ))}
      </div>
    </div>
  )
}
