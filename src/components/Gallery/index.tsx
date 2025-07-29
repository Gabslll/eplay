import { useState } from 'react'

import { Item, Items, Action, Modal, ModalContent } from './styles'
import { GalleryProps } from '../../pages/Home'

import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import Section from '../Section'

const mock: GalleryProps[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=kCHiwkqhvqi_S3LB'
  }
]

type Props = {
  defaultCover?: string
  name?: string
}

interface ModalState extends GalleryProps {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  const getMediaCover = (item: GalleryProps) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryProps) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Fechar galeria" onClick={closeModal} />
          </header>
          {modal.type === 'video' ? (
            <img src={modal.url} alt="Banner do jogo" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
