import { useState } from 'react';
import { TaskItem } from '../TaskItem';
import * as S from './styles';

type FilterData = 'all' | 'active' | 'completed';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onRemoveOneTask: (taskId: string) => void;
  onToggleIsCompletedTask: (taskId: string) => void;
  onRemoveAllTasksCompleted: () => void;
};

export function TaskList({
  tasks,
  onRemoveOneTask,
  onToggleIsCompletedTask,
  onRemoveAllTasksCompleted,
}: TaskListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterData>('all');

  function renderTasks(filter: FilterData) {
    switch (filter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter((task) => task.isCompleted === false);
      case 'completed':
        return tasks.filter((task) => task.isCompleted === true);
    }
  }

  return (
    <S.Container>
      <S.ContentBody>
        {renderTasks(activeFilter).map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onRemoveOneTask={onRemoveOneTask}
            onToggleIsCompletedTask={onToggleIsCompletedTask}
          />
        ))}

        {tasks.length > 0 && (
          <S.ContentBodyFooter>
            <S.ContentBodyItem>
              {tasks.filter((task) => task.isCompleted === false).length} items
              left
            </S.ContentBodyItem>
            <S.ContentBodyItem onClick={onRemoveAllTasksCompleted}>
              Clear Completed
            </S.ContentBodyItem>
          </S.ContentBodyFooter>
        )}
      </S.ContentBody>

      {tasks.length > 0 && (
        <S.ContentFooter>
          <S.ContentFooterItem
            onClick={() => setActiveFilter('all')}
            isActive={activeFilter === 'all'}
          >
            All
          </S.ContentFooterItem>
          <S.ContentFooterItem
            onClick={() => setActiveFilter('active')}
            isActive={activeFilter === 'active'}
          >
            Active
          </S.ContentFooterItem>
          <S.ContentFooterItem
            onClick={() => setActiveFilter('completed')}
            isActive={activeFilter === 'completed'}
          >
            Completed
          </S.ContentFooterItem>
        </S.ContentFooter>
      )}
    </S.Container>
  );
}
