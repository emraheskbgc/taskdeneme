import Link from 'next/link'
import { formatDate } from '../../lib/utils/formatter.js'
import checkPriority from '../../lib/utils/checkPriority.js'

const TaskCard = ({ task }) => {
  return (
    <div className="border p-4 flex flex-col gap-3 hover:shadow-md cursor-pointer rounded-md hover:scale-105">
      <div className="flex items-center justify-between">
        <Link href={`/admindashboard/task/${task.id}`}>
          <h2 className="text-xl font-bold hover:text-blue-600">
            {task.title}
          </h2>
        </Link>
        <p className={checkPriority(task.priority)}>
          <span>{task.priority}</span> PRIORITY
        </p>
      </div>
      <div>
        <p className="text-sm">{task.description}</p>
      </div>
      <p>{`Status: ${task.status}`}</p>
      <p>{formatDate(task.createdAt)}</p>
    </div>
  )
}
export default TaskCard
