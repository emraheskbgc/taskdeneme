import { getDataByMany } from '../../../../services/servicesOperations'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query
    try {
      if (id) {
        const userTasks = await getDataByMany('UserOnTask', {
          userId: id,
        })

        // Extract tasks
        const taskIds = userTasks.map((userTask) => userTask.taskId)
        const tasks = await getDataByMany('Task', { id: { in: taskIds } })

        return res.status(200).json({ status: 'success', tasks })
      }
    } catch (error) {
      return res.status(500).json({ status: 'error', message: error.message })
    }
  }
}

export default handler
