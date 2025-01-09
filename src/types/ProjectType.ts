export type LinkType = {
  text: string,
  link: string
}

export interface ProjectType {
  id: string,
  name: string,
  category: string,
  description: string,
  stack: string[],
  images: string[],
  githubRepoLinks?: LinkType[],
  demoLink?: LinkType | null,
  backgroundColorHex: string
}

export interface ProjectGridTileType extends ProjectType {
  gridPlacementClass: string,
  tier: number
}
