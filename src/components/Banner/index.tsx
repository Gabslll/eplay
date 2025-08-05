import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { use, useEffect, useState } from 'react'

import { formatPrice } from '../ProductsList' 

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <p>Carregando...</p>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De R$ <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas R$ {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
