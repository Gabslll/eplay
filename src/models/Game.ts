class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.system = system
    this.infos = infos
    this.title = title
  }
}

export default Game
