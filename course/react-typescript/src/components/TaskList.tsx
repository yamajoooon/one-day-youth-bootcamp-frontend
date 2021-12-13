import React,{ useCallback} from 'react';
import { Task } from '../';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskList: React.FC<Props> = (props) => {
  const { tasks, setTasks } = props;
  // Taskの状態を切り替える

  const handleCheckBox = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  },[tasks])

  return (
    <>
      <ul>
        {tasks.map((task, index) => {
          <li key={`to-do-${index}`}>
            {task.isDone 
              ? <s>{task.label}</s> 
              : task.label
            }
            <input 
              onChange={(e) => handleCheckBox(e, index)}
              type = "type"
              checked={task.isDone}
            />
          </li>
        })}
      </ul>
    </>
  );
};
