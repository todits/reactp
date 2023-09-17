import { useContext, useState } from "react"
import styles from "./style.module.css"
import { Context } from "../contexts/TodoContext"

const From = () => {
   const { todoList, setTodoList, todo, setTodo } = useContext(Context)

   // const handleChange = (event) => {
   //    setTodo(event.target.value)
   // }
   const handleChangeName = (event) => {
      //    setProducts(event.target.value)
      const { name, value } = event.target
      setTodo((prev) => {
         // console.log(prev)
         //  prev.name kay equal sa .value
         return { ...prev, [name]: value }
      })
      //   console.log(event)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      setTodoList([...todoList, todo])
      setTodo({
         task: "",
         done: false,
      })
   }
   return (
      <div className={styles.todoform}>
         <form onSubmit={handleSubmit}>
            <input
               value={todo.task}
               onChange={handleChangeName}
               className={styles.todoinput}
               placeholder="Add Todo Item"
               name="task"
               required
            ></input>

            <button type="submit" className={styles.todobutton}>
               Add
            </button>
         </form>
      </div>
   )
}

export default From
