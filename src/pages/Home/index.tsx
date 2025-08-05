import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

import { useGetComingSoonQuery, useGetOnSaleQuery } from '../../services/api'

export interface GalleryProps {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  releaseDate?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryProps[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: comingSoonGames } = useGetComingSoonQuery()

  if (onSaleGames && comingSoonGames) {
    return (
      <>
        <Banner />
        <ProductList games={onSaleGames} title="Promoções" background="gray" />
        <ProductList games={comingSoonGames} title="Em breve" background="black" />
      </>
    )
  }

  return (
    <h4>Carregando...</h4>
  )

}

export default Home
