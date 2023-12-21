/**
 * Imports
 */
// React
import React from 'react'

// Styles
import styles from '@/styles/componentsButtonDefault.module.scss'

// Types
import type { DefaultPropType } from '@/types/DefaultPropType'

interface ButtonDefaultPropType extends DefaultPropType {
  text: string,
  link?: string,
  isExternal?: boolean
}

export default function ButtonDefault({ text, link = '', isExternal = false, className = '' }: ButtonDefaultPropType) {

  const buttonOrAnchorTag = link ? 'a' : 'button'

  function componentAttribute() {
    let defaultAttribute: { [key: string]: string } = {
      href: link
    }

    if (isExternal) {
      defaultAttribute.target = '_blank'
      // return {
      //   href: link,
      //   target: '_blank'
      // }
    }
    // return {}
    return defaultAttribute
  }

  return React.createElement(
    buttonOrAnchorTag,
    {
      className: `${styles['c-button']} bg-primary p-4 rounded-lg border-2 border-solid border-secondary font-bold cursor-pointer text-center text-black ${className}`,
      ...componentAttribute()
    },
    text
  ) 
}
