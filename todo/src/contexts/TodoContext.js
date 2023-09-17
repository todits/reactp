import React, { createContext, useState } from "react"

const Context = createContext()

const TodoContext = ({ children }) => {
   const [todo, setTodo] = useState({
      task: "",
      done: false,
   })
   const [todoList, setTodoList] = useState([])
   console.log(todoList)
   return (
      <Context.Provider value={{ todo, setTodo, todoList, setTodoList }}>
         {children}
      </Context.Provider>
   )
}

export default TodoContext

export { Context }
