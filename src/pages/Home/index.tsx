import { useState } from 'react';
import { Header } from '../../components/Header';
import { NewTaskField } from '../../components/NewTaskField';
import { TaskList } from '../../components/TaskList';
import * as S from './styles';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

const tasksMock = [
  {
    id: '1-fake',
    name: 'Complete online JavaScript course',
    isCompleted: true,
  },
  {
    id: '2-fake',
    name: 'Jog around the park 3x',
    isCompleted: false,
  },
  {
    id: '3-fake',
    name: '10 minutes meditation',
    isCompleted: false,
  },
  {
    id: '4-fake',
    name: 'Read for 1 hour',
    isCompleted: false,
  },
  {
    id: '5-fake',
    name: 'Pick up groceries',
    isCompleted: false,
  },
  {
    id: '6-fake',
    name: 'Complete Todo App on Frontend Mentor',
    isCompleted: false,
  },
];

export function Home() {
  const [tasks, setTasks] = useState<Task[]>(tasksMock);

  function addNewTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function toggleIsCompletedTask(taskId: string) {
    const index = tasks.findIndex((task) => task.id === taskId);
    const cloneTasks = [...tasks];

    cloneTasks[index].isCompleted = !cloneTasks[index].isCompleted;

    setTasks(cloneTasks);
  }

  function removeOneTask(taskId: string) {
    const tasksWithoutOne = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksWithoutOne);
  }

  function removeAllTasksCompleted() {
    const nonCompletedTasks = tasks.filter(
      (task) => task.isCompleted === false
    );

    setTasks(nonCompletedTasks);
  }

  return (
    <S.Container>
      <Header />
      <NewTaskField onAddNewTask={addNewTask} />
      <TaskList
        tasks={tasks}
        onRemoveOneTask={removeOneTask}
        onToggleIsCompletedTask={toggleIsCompletedTask}
        onRemoveAllTasksCompleted={removeAllTasksCompleted}
      />
    </S.Container>
  );
}
