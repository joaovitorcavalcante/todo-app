import checkIcon from '../../assets/images/icon-check.svg';
import removeIcon from '../../assets/images/icon-cross.svg';

import * as S from './styles';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type TaskItemProps = {
  task: Task;
  onRemoveOneTask: (taskId: string) => void;
  onToggleIsCompletedTask: (taskId: string) => void;
};

export function TaskItem({
  task,
  onRemoveOneTask,
  onToggleIsCompletedTask,
}: TaskItemProps) {
  function handleRemoveTask() {
    onRemoveOneTask(task.id);
  }

  function handleToggleIsCompletedTask() {
    onToggleIsCompletedTask(task.id);
  }

  return (
    <S.Container>
      <S.CheckIcon
        isCompleted={task.isCompleted}
        onClick={handleToggleIsCompletedTask}
      >
        {task.isCompleted && <img src={checkIcon} alt="checked" />}
      </S.CheckIcon>
      <S.Description isCompleted={task.isCompleted}>{task.name}</S.Description>
      <S.RemoveIcon src={removeIcon} onClick={handleRemoveTask} />
    </S.Container>
  );
}
