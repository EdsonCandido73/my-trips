import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from '@/components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit soluta,
        beatae nostrum rem tempora ut quia debitis consequuntur provident
        corporis commodi, hic eius rerum neque illo reiciendis. Iure, quos in!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
