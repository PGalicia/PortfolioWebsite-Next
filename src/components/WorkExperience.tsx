/**
 * Imports
 */
// Types
import type { ExperienceType } from '@/types/ExperienceType'
import type { DefaultPropType } from '@/types/DefaultPropType'

// Components
import LinkDefault from '@/components/LinkDefault'

// Prop type
interface WorkExperiencePropType extends DefaultPropType {
  experience: ExperienceType
}

export default function WorkExperience({ experience, className = '' }: WorkExperiencePropType) {
  /**
   * Constants
   */
  const {
    title,
    company,
    link,
    location,
    dateString,
    isLaidOff,
    tasks
  } = experience

  function isLaidOffText () {
    if (isLaidOff) {
      return ` ${String.fromCharCode(8226)} Departure due to company layoff`;
    } else {
      return '';
    }
  }

  return (
    <div className={className}>
      {/* Title */}
      <div className="text-2xl md:text-3xl font-bold mb-0 md:mb-1">
        {title}
      </div>

      {/* Company Link */}
      <LinkDefault
        text={company}
        link={link || ''}
        size="medium"
      />

      {/* Location */}
      <div className="text-sm md:text-base opacity-75">
        {location} &bull; {dateString}{isLaidOffText()}
      </div>

      {/* Tasks */}
      <ul className="list-disc pl-8 md:pl-12 mt-4 md:mt-8">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={index > 0 ? 'mt-2' : ''}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
