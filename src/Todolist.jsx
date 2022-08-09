//rafce tab補完でコンポーネントの雛形作成

import React from 'react'
import Todo from './Todo';

//{todos}でApp.jsのtodsを受け取る
const Todolist = ({todos}) => {
  /*
  return (
    //{}をjsx記号を呼び、jsのように書くことができる
    <div>{todos.todos}</div>
  )
  */
  //map関数をtodosに格納されているものを一つずつ取り出している。
  //Todoコンポーネント作成 -> Todo.jsx作成
  return (
    todos.map((todo) => <Todo todo={todo} />)
  )
}

export default Todolist