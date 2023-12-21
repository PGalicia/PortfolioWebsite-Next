/**
 * Imports
 */
// Components
import Image from 'next/image'
import LinkDefault from '@/components/LinkDefault'
import LinkInline from '@/components/LinkInline'

// Types
import type { DefaultPropType } from '@/types/DefaultPropType'

// Styles
import styles from '@/styles/componentAboutDefault.module.scss'

export default function AboutDefault({ className = '' }: DefaultPropType) {
  return (
    <div
      id="about"
      className={`${styles['c-about']} flex gap-8 flex-col md:flex-row ${className}`}
    >
      <div className={`${styles['c-about__imgContainer']} h-72 md:h-96 w-full md:w-80 bg-white shrink-0 overflow-hidden relative`}>
        <Image
          className="absolute w-full h-auto top-1/2 -translate-y-1/2"
          src="/images/portrait.jpeg"
          alt="Patrick Galicia Portrait"
          width="3024"
          height="4032"
        />
      </div>
      <div>
        <p className="text-base mb-6">
          Hi, I&apos;m <span className="text-white font-bold">Patrick Galicia</span>, a <span className="text-white">full-stack engineer</span> based in Los Angeles, California, currently working for a wiki hosting service, <LinkInline link="https://www.fandom.com/" text="Fandom" isExternal={true} />. The foundation of my career was shaped with a bachelors in software engineering and still continuously learning all of its nuances, be it the best practices or wherever my curiosity drives me.
        </p>
        <div>
          <span className="mr-2 font-light">Say hi:</span>
          <a
            href="mailto:galicia.patrick@gmail.com"
            className={`${styles['c-about__email']} text-white bg-secondary p-2 font-source italic text-base transition-all`}
          >
            galicia.patrick@gmail.com
          </a>
        </div>
        <div className="my-8">
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
      </div>
    </div>
  )
}
