/**
 * Imports
 */
// Styles
import styles from '@/styles/componentLabelDefault.module.scss'

// Types
import type { DefaultPropType } from '@/types/DefaultPropType'

interface LabelDefaultPropTypes extends DefaultPropType {
  label: string
}

export default function LabelDefault({ label, className = '' }: LabelDefaultPropTypes) {
  return (
    <h3 className={`${styles['c-label']} text-primary text-5xl md:text-6xl font-semibold max-w-md ${className}`}>
      {label}.
    </h3>
  )
}
