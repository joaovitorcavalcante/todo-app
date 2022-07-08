import * as S from './styles';

import moonIcon from '../../assets/images/icon-moon.svg';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>todo</S.Title>
        <S.Icon src={moonIcon} />
      </S.Content>
    </S.Container>
  );
}
