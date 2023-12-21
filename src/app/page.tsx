'use client'

/**
 * Imports
 */
// React
import { useSelector } from 'react-redux'

// Redux
import { RootState } from '@/redux/store'

// Components
import HeaderDefault from '@/components/HeaderDefault'
import AboutDefault from '@/components/AboutDefault'
import WorkDefault from '@/components/WorkDefault'
import ToolboxDefault from '@/components/ToolboxDefault'
import ProjectDefault from '@/components/ProjectDefault'
import ModalDefault from '@/components/ModalDefault'
import ButtonDefault from '@/components/ButtonDefault'
import LinkInline from '@/components/LinkInline'
import LinkDefault from '@/components/LinkDefault'

export default function Home() {
  /**
   * Redux
   */
  const isModalActive = useSelector((state: RootState) => state.modalReducer.isModalActive)

  /**
   * Constants
   */
  const moduleClasses = 'py-12 md:py-24'

  return (
    <div className="text-primary max-w-page px-8 md:px-0 mx-auto my-0">
      {/* Header */}
      <HeaderDefault className="w-full h-screen flex justify-center items-center" />

      {/* Projects */}
      <ProjectDefault className={moduleClasses} />

      {/* About */}
      <AboutDefault className={moduleClasses} />

      {/* Work */}
      <WorkDefault className={moduleClasses} />

      {/* Toolbox */}
      <ToolboxDefault className={moduleClasses} />

      {/* Modal */}
      {isModalActive && <ModalDefault />}

      {/* Resume */}
      <div className="pt-4 pb-2">
        <div className="text-center text-xl">
          If you have any questions or just want to say hi, please email me @ <LinkInline link="mailto:galicia.patrick@gmail.com" text="galicia.patrick@gmail.com" />. If you just want my resume, here you go...
        </div>
        <ButtonDefault
          text="View my resume"
          link="/resume.pdf"
          isExternal={true}
          className="block my-8"
        />
      </div>

      {/* Links */}
      <div className="flex justify-center gap-12 py-4">
        <LinkDefault
          text="Github"
          link="https://github.com/PGalicia"
        />
        <LinkDefault
          text="LinkedIn"
          link="https://www.linkedin.com/in/patrick-galicia/"
        />
        <LinkDefault
          text="Instagram"
          link="https://www.instagram.com/pat.on.theback/"
        />
      </div>

      {/* Footer */}
      <div className="text-center text-sm font-light">&copy; 2023 Patrick Galicia &bull; Full Stack Engineer</div>
      <div className="text-center text-sm font-light mt-1 mb-8">Website Stack: ReactJs, Redux, Javascript/Typescript, Tailwind CSS/SASS</div>
    </div>
  )
}
