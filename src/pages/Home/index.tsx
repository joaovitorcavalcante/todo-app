import { Header } from '../../components/Header';
import { NewTaskField } from '../../components/NewTaskField';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header />
      <NewTaskField />
    </S.Container>
  );
}
