export type DemoType = {
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
  githubRepoLink: string,
  demoLink: DemoType | null,
  backgroundColorHex: string
}

export interface ProjectGridTileType extends ProjectType {
  gridPlacementClass: string,
  tier: number
}
