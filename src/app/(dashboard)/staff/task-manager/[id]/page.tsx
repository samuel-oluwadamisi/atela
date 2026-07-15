import { getTaskById } from '@/features/staff/data/tasks';
import TaskManagerFullPageScreen from '@/features/staff/task-manager/screens/TaskManagerFullPageScreen';


type Props = {
  params: Promise<{
    id: number;
  }>;
};
const TaskManagerFullPage = async({params}: Props) => {

    const { id } = await params;
    const task = getTaskById(id);
  if (!task) 
    return <p className='text-red-600'>Task Not Found</p>;

  return (
    <>
    <TaskManagerFullPageScreen task = {task} />
    </>
  )
}

export default TaskManagerFullPage