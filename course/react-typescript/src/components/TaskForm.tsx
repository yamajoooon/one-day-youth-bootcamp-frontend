
   
import React, { useCallback }from 'react';
import { Task } from '../';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
};

export const TaskForm: React.FC<Props> = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
}) => {
  // フォームの値を保持する
  const handleNewTaskLabel = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  },[]);

  // Taskの登録
  const handleAddTask = useCallback(() => {
    const newTask = { label: newTaskLabel, isDone: false }
    setTasks([...tasks, newTask]);
    setNewTaskLabel('');
  },[newTaskLabel]);

  // 完了したTaskを削除する
  const handleClearTasks = useCallback(() => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  },[tasks]);

  return (
    <>
      <input
        onChange={handleNewTaskLabel}
        type="text"
        value={newTaskLabel}
        placeholder="Enter the task"
      />
      <button onClick={handleAddTask}>Add</button>
      <br />
      <button onClick={handleClearTasks}>Clear</button>
    </>
  );
};

