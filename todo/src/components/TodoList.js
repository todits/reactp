import { useContext } from "react"
import Todo from "./Todo"
import { Context } from "../contexts/TodoContext"

const TodoList = () => {
   const { todoList, setTodoList } = useContext(Context)
   return (
      <div>
         {todoList.map((todoItem, index) =>
            !todoItem.done ? (
               <Todo
                  setTodoList={setTodoList}
                  key={index}
                  todoItem={todoItem}
                  todoList={todoList}
                  todoindex={index}
               ></Todo>
            ) : (
               ""
            )
         )}
      </div>
   )
}

export default TodoList
