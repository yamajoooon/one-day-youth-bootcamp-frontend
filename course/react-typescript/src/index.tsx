import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { request } from "./server";

// TODOタスクの型
export type Task = { 
  label: string;
  isDone: boolean;
}

const App = () => {
  // タスクリストを格納する
  const [tasks,setTasks] = useState<Task[]>([]);
  const [ newTaskLabel, setNewTaskLabel] = useState<string>('');


  // 追加前のタスクを格納する

  // ページマウント時にモックAPIからデータを取得

  useEffect(()=>{
    request.fetchTasks((payload: Task[]) => setTasks(payload));
  },[])

  return (
    <div style={{ width: '700px', margin: '0 auto' }}>
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>

      {/* 一覧表示 */}
      <TaskList {...{ tasks, setTasks}}/>

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks,setTasks, newTaskLabel, setNewTaskLabel}}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));

