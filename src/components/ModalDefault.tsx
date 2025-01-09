/**
 * Imports
 */
// React
import { useDispatch, useSelector } from 'react-redux'

// Redux
import { AppDispatch, RootState } from '@/redux/store'
import { closeModal } from '@/redux/features/modalSlice'

// Components
import Image from 'next/image'
import ButtonDefault from '@/components/ButtonDefault'
import { XMarkIcon } from '@heroicons/react/24/outline';

// Types
import type { ProjectType } from '@/types/ProjectType'

// Styles
import styles from '@/styles/componentModalDefault.module.scss'

export default function ModalDefault() {
  /**
   * Redux
   */
  const currentProject = useSelector((state: RootState) => state.modalReducer.currentProject)
  const dispatch = useDispatch<AppDispatch>()

  // If currentProject doesn't exist, return null
  if (!currentProject) {
    return null
  }

  /**
   * Constants
   */
  const {
    id: projectId,
    name,
    description,
    stack,
    images,
    demoLink = null,
    githubRepoLinks = []
  }: ProjectType = currentProject

  /**
   * Methods
   */
  function parseImageName (imageFileName: string) {
    const imageName = imageFileName.split('.')[0].split('-')
    for (let i = 0; i < imageName.length; i++) {
      imageName[i] = imageName[i][0].toUpperCase() + imageName[i].substring(1)
    }
    return imageName.join(' ')
  }

  function buttonContainerExtraClass(): string {
    return githubRepoLinks.length > 1
      ? ''
      : 'md:grid-cols-2';
  }

  function closeProjectModal() {
    dispatch(closeModal());
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white overflow-y-scroll border-4 md:border-8 border-primary u-slideUp">
      <div className="w-full max-w-auto md:max-w-[800px] text-black flex flex-col py-8 px-4 mx-auto my-0">
        {/* Name */}
        <div className="text-4xl font-bold mb-8 flex justify-between items-center gap-8">
          <h4>{name}.</h4>
          <button
            className="w-8 aspect-square transition-colors bg-slate-200 hover:bg-slate-100 rounded-md p-2 box-content"
            onClick={closeProjectModal}
          >
            <XMarkIcon />
          </button>
        </div>

        {/* Description */}
        <div className="text-xl font-semibold mb-2">
          Description:
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />

        {/* Stack */}
        <div className="text-xl font-semibold mb-2">
          Stack:
        </div>
        <div className="text-xl mb-6">
          {stack.join(', ')}
        </div>

        {/* Images */}
        {images.length > 0 &&
          <div className="text-xl font-semibold mb-4">
            Images:
          </div>
        }

        {images.length > 0 &&
          <div className="flex flex-col gap-8 mb-6 mx-4 md:mx-24">
            {images.map((image, index) => (
              <div key={index}>
                <div className={`${styles['c-modalShadow']} rounded-lg border-3 border-solid border-secondary overflow-hidden`}>
                  <Image
                    src={`/images/projects/screenshots/${projectId}/${image}`}
                    alt={`${projectId} image`}
                    className="w-full"
                    height="500"
                    width="500"
                  />
                </div>
                <div className="text-center font-semibold mt-4">
                  {parseImageName(image)}
                </div>
              </div>
            ))}
          </div>
        }

        {/* Buttons */}
        <div className={`grid grid-cols-1 ${buttonContainerExtraClass()} gap-4 w-full`}>
          {demoLink &&
            <ButtonDefault
              text={demoLink.text}
              link={demoLink.link}
              isExternal={true}
            />
          }
          {githubRepoLinks.length > 0 &&
            <ButtonDefault
              text={githubRepoLinks[0].text}
              link={githubRepoLinks[0].link}
              isExternal={true}
            />
          }
          {githubRepoLinks.length > 1 &&
            <ButtonDefault
              text={githubRepoLinks[1].text}
              link={githubRepoLinks[1].link}
              isExternal={true}
            />
          }
        </div>
      </div>
    </div>
  )
}
