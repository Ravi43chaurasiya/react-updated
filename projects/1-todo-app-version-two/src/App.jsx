import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
  const todoItems=[
    {
      taskName:"Buy Milk",
      duedate:'04/10/2023',
    },
    {
      taskName:"Go to College",
      duedate:'04/10/2023',
    },
    {
      taskName:"like this page",
      duedate:"right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    
      
    
    </center>
  );
}

export default App;
