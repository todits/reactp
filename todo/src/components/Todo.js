import styles from "./style.module.css"

const Todo = ({ todoItem, todoList, todoindex, setTodoList }) => {
   const deleteTodo = () => {
      const updatedTodoList = todoList.map((p, index) => {
         if (index === todoindex) {
            return { ...p, done: true }
         }
         return p
      })
      setTodoList(updatedTodoList)
   }
   return (
      <div>
         <div className={styles.todoitem}>
            <h3 className={styles.todoname}>{todoItem.task}</h3>
            <button onClick={deleteTodo} className={styles.deletebutton}>
               Done
            </button>
         </div>
      </div>
   )
}

export default Todo
