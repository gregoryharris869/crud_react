import styles from "./TaskList.module.css"
const TaskItem = ({ task }) => {
  return (
    <li className={styles.task}>
      {task.name}
    </li>
  )
}

export default TaskItem