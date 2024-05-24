import { getAllData } from '../../../services/servicesOperations'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const tasks = await getAllData('Task')
    const completedCheckPendingCount = tasks.filter(
      (task) => task.status === 'COMPLETED_CHECK_PENDING'
    ).length
    const inProgressCount = tasks.filter(
      (task) => task.status === 'IN_PROGRESS'
    ).length
    return res.status(200).json({
      status: 'success',
      data: {
        tasks: tasks,
        completedTaskCount: completedCheckPendingCount,
        inProgressTaskCount: inProgressCount,
        allTaskCount: tasks.length,
      },
    })
  }
  return res
    .status(500)
    .json({ status: 'error', message: 'Method not allowed' })
}

export default handler
