/**
 * Imports
 */
// Components
import LabelDefault from '@/components/LabelDefault'
import WorkExperience from '@/components/WorkExperience'

// Types
import type { DefaultPropType } from '@/types/DefaultPropType'

// Constants
import { EXPERIENCE } from '@/constants/Experience'

export default function WorkDefault({ className = '' }: DefaultPropType) {
  return (
    <div
      id="work"
      className={className}
    >
      {/* Label */}
      <LabelDefault
        className="mb-12"
        label="Technical Experience"
      />

      {EXPERIENCE.map((exp, index) => (
        <WorkExperience
          key={index}
          experience={exp}
          className={index > 0 ? 'mt-8' : ''}
        />
      ))}
    </div>
  )
}
