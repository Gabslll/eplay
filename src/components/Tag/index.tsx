import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: JSX.Element | string
}

const Tag = ({ children, size = 'small' }: Props) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
