//変数を監視管理するためのフックス
import { useState } from "react";
//文字列など要素を取得するためのフックス
import { useRef } from "react";
import Todolist from "./Todolist";
//ランダムキーを用いるために、uuidを用いる
import {v4 as uuidv4 } from "uuid";

function App() {
  //const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () =>{
  //コンソールに入力値が表示されることが確認できる
    //console.log(todoNameRef.current.value);

  //タスクを追加する
    const name = todoNameRef.current.value;
    if(name === "") return;
    //setTdosでtodosの中身の更新を行う。
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4() ,name: name, completed: false}];
    })
    todoNameRef.current.value = null;
  }
  //on of機能
  const toggleTodo = (id) => {
    //todosをnewTodosにコピー
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id ===id );
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  //削除機能
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }


  return (
    <div >
      <Todolist todos={todos} toggleTodo={toggleTodo} handleClear={handleClear}/>
      <input type="text " ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
