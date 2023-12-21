/**
 * Imports
 */
// Styles
import styles from '@/styles/componentLinkDefault.module.scss'

interface LinkDefaultPropType {
  text: string,
  link?: string,
  size?: 'small' | 'medium'
}

export default function LinkDefault({ text, link = '#', size = 'small' }: LinkDefaultPropType) {
  /**
   * Methods
   */
  function containerClasses () {
    const allClasses = [
      styles['c-link'],
      'text-white',
      'w-fit',
      'block',
      'cursor-pointer'
    ]

    if (size === 'small') {
      allClasses.push('text-lg')
    } else if (size === 'medium') {
      allClasses.push('text-base', 'md:text-xl')
    }

    return allClasses.join(' ')
  }


  function externalLinkAttributes() {
    const attributes: { [key: string]: string } = {
      href: link
    }
  
    if (link && link[0] !== '#' && !link.includes('mailto')) {
      attributes.target = '_blank'
    }
  
    return attributes
  }

  function onClickHandler(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    // Only scroll into view if link is referring to something in page
    if (link[0] === '#' && link.length > 1) {
      event.preventDefault()
      document.getElementById(link.substring(1))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      className={containerClasses()}
      {...externalLinkAttributes()}
      onClick={onClickHandler}
    >
      <span className={styles['c-link__symbol']}>&gt;</span> {text}
    </a>
  )
}