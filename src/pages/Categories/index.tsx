import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductsList'

import { Game } from '../Home'


const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesEsports, setGamesEsports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesFighter, setGamesFighter] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsports(res))
      
    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/luta')
      .then((res) => res.json())
      .then((res) => setGamesFighter(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/categorias/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
  <>
    <ProductList games={gamesAction} title="Ação" background="black" />
    <ProductList games={gamesEsports} title="Esportes" background="gray" />
    <ProductList games={gamesFighter} title="Luta" background="black" />
    <ProductList games={gamesRPG} title="RPG" background="gray" />
    <ProductList games={gamesSimulation} title="Simulação" background="black" />
  </>
  )
}

export default Categories
