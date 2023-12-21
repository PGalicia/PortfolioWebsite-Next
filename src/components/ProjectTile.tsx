/**
 * Imports
 */
// React
import { useDispatch } from 'react-redux'

// Redux
import { AppDispatch } from '@/redux/store'
import { openModal } from '@/redux/features/modalSlice'

// Types
import type { ProjectGridTileType } from '@/types/ProjectType'
import type { DefaultPropType } from '@/types/DefaultPropType'

// Components
import Image from 'next/image'

// Styles
import styles from '@/styles/componentProjectTile.module.scss'

interface ProjectTilePropType extends DefaultPropType {
  project: ProjectGridTileType
}

export default function ProjectTile({ project, className = '' }: ProjectTilePropType) {
  /**
   * Redux
   */
  const dispatch = useDispatch<AppDispatch>()

  /**
   * Constants
   */
  const {
    id,
    name,
    category,
    tier
  } = project

  /**
   * Methods
   */
  function containerClasses() {
    const allClasses = [
      className,
      // `c-projectTile--${id}`,
      styles['c-projectTile'],
      styles[`c-projectTile--${id}`],
      'relative',
      'p-4',
      'rounded',
      'cursor-pointer',
      'text-white',
      'overflow-hidden'
    ]

    if (tier === 4) {
      allClasses.push('h-auto aspect-square')
    }

    return allClasses.join(' ')
  }

  function imgClasses () {
    const centerImage = styles['c-projectTile__image--centerImage']
    const centerImageHorizontal = styles['c-projectTile__image--centerImage--horizontal']

    const allClasses = [
      'absolute'
    ]

    if (tier === 3) {
      allClasses.push(centerImageHorizontal, 'w-auto', 'left-1/2', '-translate-x-1/2')
    } else if (tier === 4) {
      allClasses.push(centerImage, 'h-auto', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2')
    } else if (id === 'nook-doku') {
      allClasses.push('w-4/5', 'right-0', '-bottom-1-2')
    } else if (id === 'boolder') {
      allClasses.push('w-[140%]', '-right-6', '-bottom-2', 'max-w-none')
    } else if (id === 'aprl') {
      allClasses.push('w-36', 'right-4', 'top-1/2', '-translate-y-1/2')
    }

    return allClasses.join(' ')
  }

  function imageHeight() {
    switch (id) {
      case 'boolder-cms':
        return '611'
      case 'boolder':
        return '500'
      case 'cocktail-finder':
        return '927'
      case 'event-planner':
        return '682'
      case 'nook-doku':
        return '534'
      case 'seance':
        return '174'
      case 'uci':
        return '491'
      case 'wisely':
        return '800'
      default:
        return '300'
    }
  }

  function imageWidth() {
    switch (id) {
      case 'boolder-cms':
        return '640'
      case 'boolder':
        return '1200'
      case 'cocktail-finder':
        return '830'
      case 'event-planner':
      case 'nook-doku':
        return '800'
      case 'seance':
        return '120'
      case 'uci':
        return '439'
      case 'wisely':
        return '623'
      default:
        return '300'
    }
  }

  return (
    <div
      className={containerClasses()}
      title={name}
      onClick={() => dispatch(openModal(id))}
    >
      {/* Name & Category */}
      {tier < 3 &&
        <>
          <div className="text-2xl md:text-3xl font-bold">
            {name}
          </div>
          <div v-if="tier < 3" className="text-sm md:text-base font-light">
            {category}
          </div>
        </>
      }

      {/* Image */}
      <Image
        className={imgClasses()}
        src={`/images/projects/logo/${id}.png`}
        alt={name}
        width={imageWidth()}
        height={imageHeight()}
      />
    </div>
  )
}
