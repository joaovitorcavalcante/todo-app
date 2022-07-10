import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 } from 'uuid';
import * as S from './styles';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type NewTaskFieldProps = {
  onAddNewTask: (task: Task) => void;
};

export function NewTaskField({ onAddNewTask }: NewTaskFieldProps) {
  const [newTaskName, setNewTaskName] = useState('');

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    if (!newTaskName) return;

    const newTask: Task = {
      id: v4(),
      name: newTaskName,
      isCompleted: false,
    };

    setNewTaskName('');
    onAddNewTask(newTask);
  }

  function handleNewTaskNameChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTaskName(e.target.value);
  }

  return (
    <S.Container onSubmit={handleCreateNewTask}>
      <S.Content>
        <S.CheckIcon />
        <S.Input
          placeholder="Create a new todo…"
          onChange={handleNewTaskNameChange}
          value={newTaskName}
        />
      </S.Content>
    </S.Container>
  );
}
