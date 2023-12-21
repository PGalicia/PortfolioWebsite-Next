interface LinkInline {
  link: string,
  text: string,
  isExternal?: boolean
}

export default function LinkInline({ link, text, isExternal = false }: LinkInline) {

  function externalLinkAttribute() {
    if (isExternal) {
      return {
        target: '_blank'
      }
    }
    return {}
  }


  return (
    <a
      className="text-white underline underline-offset-4 hover:underline-offset-8 transition-all"
      href={link}
      {...externalLinkAttribute()}
    >
      {text}
    </a>
  )
}
