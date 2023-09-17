import Header from "./components/Header"
import Form from "./components/Form"
import { useState } from "react"
// import Todo from "./components/Todo"
import TodoList from "./components/TodoList"
import TodoContext from "./contexts/TodoContext"
import DoneList from "./components/DoneList"

function App() {
   return (
      <TodoContext className="App">
         <Header></Header>
         <Form></Form>
         <TodoList></TodoList>
         <DoneList />
      </TodoContext>
   )
}

export default App
