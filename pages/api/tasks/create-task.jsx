import { createNewData } from '../../../services/servicesOperations/index.js'

const handler = async (req, res) => {
  if (!req) {
    return res
      .status(500)
      .json({ status: 'error', message: 'Bir hata oluştu!' })
  }

  if (req.method === 'POST' && req.body) {
    const {
      title,
      description,
      priority,
      createdAt,
      status,
      assignedUsers,
      subtasks,
    } = req.body

    const newData = {
      title,
      description,
      priority,
      createdAt: new Date(createdAt),
      status,
      subtasks: {
        create: subtasks.map((subtask) => ({
          id: subtask.id,
          title: subtask.title,
          createdAt: new Date(subtask.createdAt),
          status: subtask.status,
        })),
      },
      assignedUsers: {
        create: assignedUsers.map((userId) => ({
          userId: userId,
        })),
      },
      comments: { create: [] },
    }

    try {
      const result = await createNewData('Task', newData)

      return res.status(200).json({ status: 'success', data: result })
    } catch (error) {
      return res.status(500).json({ status: 'error', message: error.message })
    }
  } else {
    return res
      .status(405)
      .json({ status: 'error', message: 'Method Not Allowed' })
  }
}

export default handler
