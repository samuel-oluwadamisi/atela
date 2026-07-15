
import { TaskDataType } from '../../types/staffDataTypes'

const TaskManagerFullPageScreen = ({task}: {task:TaskDataType}) => {
  return (
    <div>
        <p>{task.client} owns {task.dress}</p>
    </div>
  )
}

export default TaskManagerFullPageScreen