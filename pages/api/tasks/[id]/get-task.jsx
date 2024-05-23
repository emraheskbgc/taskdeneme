import { getDataByUniqueRelitionalTable } from '../../../../services/servicesOperations'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query

    try {
      const taskId = id
      const include = {
        subtasks: true,
        comments: true,
        assignedUsers: {
          include: {
            user: true,
          },
        },
      }
      const task = await getDataByUniqueRelitionalTable(
        'Task',
        { id: taskId },
        include
      )

      return res.status(200).json({ status: 'success', task })
    } catch (error) {
      return res.status(500).json({ status: 'error', message: error.message })
    }
  }

  return res
    .status(500)
    .json({ status: 'error', message: 'Method not allowed' })
}

export default handler
