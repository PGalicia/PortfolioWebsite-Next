/**
 * Imports
 */
// Libraries
import Typed from 'typed.js'

// Constants
import { TYPEWRITER_TEXTS } from '@/constants/TypewriterText'

// Components
import LinkDefault from '@/components/LinkDefault'

// React
import { useEffect, useRef } from 'react'

// Font
import { source } from '@/app/fonts'

// Types
import type { DefaultPropType } from '@/types/DefaultPropType'

export default function HeaderDefault({ className = '' }: DefaultPropType) {
  /**
   * States
   */
  const typeElement = useRef<HTMLSpanElement | null>(null);

  /**
   * Hooks
   */
  useEffect(() => {
    new Typed(typeElement.current, {
      strings: TYPEWRITER_TEXTS,
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 1000,
      cursorChar: '_',
      loop: true
    })
  }, [])

  return (
    <div className={`c-header flex justify-center items-center ${className}`}>
      <div className="relative">
        <div className="mb-2">
          <span className="mr-4 italic font-semibold text-3xl md:text-5xl">Hello.</span>
          <span className="text-2xl md:text-4xl">My name is</span>
        </div>
        <div className="c-header__name text-7xl md:text-8xl font-black mb-4 md:mb-8">
          Patrick Galicia
        </div>
        <div className="mb-4 md:mb-8 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="text-2xl md:text-4xl mr-4 font-light">
            I am a
          </div>
          <div className={`bg-secondary p-4 text-2xl md:text-4xl font-source italic text-white w-fit ${source.className}`}>
            Full Stack Engineer
          </div>
        </div>
        <div className="h-[65px]">
          <span className="text-2xl md:text-4xl mr-4 font-bold italic">and</span>
          <span ref={typeElement} className="typed text-2xl md:text-4xl" />
        </div>
        <div className="my-8 flex flex-col gap-2">
          <LinkDefault text="Projects" link="#projects" />
          <LinkDefault text="About" link="#about" />
          <LinkDefault text="Work" link="#work" />
          <LinkDefault text="Toolbox" link="#toolbox" />
        </div>
      </div>
    </div>
  )
}