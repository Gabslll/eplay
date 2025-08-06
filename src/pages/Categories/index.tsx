import { use, useEffect, useState } from 'react'
import ProductList from '../../components/ProductsList'

import { Game } from '../Home'

import { useGetActionGamesQuery, useGetEsportsGamesQuery, useGetFighterGamesQuery, useGetRPGGamesQuery, useGetSimulationGamesQuery } from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: esportsGames } = useGetEsportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fighterGames } = useGetFighterGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  if (actionGames && esportsGames && simulationGames && fighterGames && rpgGames) {
    return (
    <>
      <ProductList games={actionGames} title="Ação" background="black" id='action'/>
      <ProductList games={esportsGames} title="Esportes" background="gray" id='esports'/>
      <ProductList games={fighterGames} title="Luta" background="black" id='fighter'/>
      <ProductList games={rpgGames} title="RPG" background="gray" id='rpg'/>
      <ProductList games={simulationGames} title="Simulação" background="black" id='simulation'/>
    </>
    )
  }

  return (
    <h4>Carregando...</h4>
  )
}

export default Categories
