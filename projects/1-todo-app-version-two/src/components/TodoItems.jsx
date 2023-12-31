import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems =({todoItems})=>
{
  return <div className={styles.itemsContainer}>
    {
      todoItems.map(item =><TodoItem todo={item.taskName} date={item.duedate}></TodoItem>)
    }
      

  </div>
}
export default TodoItems;