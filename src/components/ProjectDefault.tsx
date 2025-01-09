/**
 * Imports
 */
// Constants
import { PROJECTS } from '@/constants/Projects'

// Components
import ProjectTile from '@/components/ProjectTile'

// Types
import type { ProjectGridTileType } from '@/types/ProjectType'
import type { DefaultPropType } from '@/types/DefaultPropType'

export default function ProjectDefault({ className = '' }: DefaultPropType) {
  /**
   * Constants
   */
  const projectMapping: { [key: number]: any } = {
    1: {
      gridPlacementClass: 'col-span-full md:col-span-4 row-span-3',
      indexes: [0, 1]
    },
    2: {
      gridPlacementClass: 'col-span-full md:col-span-4 row-span-2',
      indexes: [2]
    },
    3: {
      gridPlacementClass: 'col-span-4 md:col-span-2 row-span-2 md:row-span-1',
      indexes: [3, 4]
    },
    4: {
      gridPlacementClass: 'col-span-2 md:col-span-1',
      indexes: [5, 6, 7, 8]
    }
  }
  
  const projectsWithPlacement: ProjectGridTileType[] = PROJECTS.map((project, index) => {
    let targetProjectMappingKey: number = 0
  
    Object.entries(projectMapping)
      .forEach(([key, value]) => {
        if (value.indexes.includes(index)) {
          targetProjectMappingKey = parseInt(key)
        }
      })
  
    return {
      ...project,
      gridPlacementClass: projectMapping[targetProjectMappingKey]?.gridPlacementClass || '',
      tier: targetProjectMappingKey
    }
  })

  return (
    <div
      id="projects"
      className={`grid grid-cols-8 grid-rows-[repeat(10,_50px)] md:grid-rows-[repeat(3,_75px)_100px_1fr] gap-4 ${className}`}
    >
      {projectsWithPlacement.map((project, index) => (
        <ProjectTile
          key={index}
          project={project}
          className={project.gridPlacementClass}
        />
      ))}
    </div>
  )
}
