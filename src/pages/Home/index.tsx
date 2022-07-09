import { useState } from 'react';
import { Header } from '../../components/Header';
import { NewTaskField } from '../../components/NewTaskField';
import * as S from './styles';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <S.Container>
      <Header />
      <NewTaskField onAddNewTask={addNewTask} />
    </S.Container>
  );
}
