import { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  return (
    <div >
      <Todolist todos={todos}/>
      <input type="text "/>
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
