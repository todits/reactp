import React, { useContext } from "react"
import { Context } from "../contexts/TodoContext"

function DoneList() {
   const { todoList, setTodoList } = useContext(Context)
   return (
      <div>
         DoneList
         <div>
            {todoList.map(
               (todo, index) =>
                  todo.done ? <div key={index}>{todo.task}</div> : ""
               //    {todo.done && <div key={index}>{todo.task}</div>}  {}
            )}
         </div>
      </div>
   )
}

export default DoneList
