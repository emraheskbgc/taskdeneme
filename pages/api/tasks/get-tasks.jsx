import { getAllData } from '../../../services/servicesOperations'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const tasks = await getAllData('Task')
    return res.status(200).json({ status: 'success', tasks })
  }
  return res
    .status(500)
    .json({ status: 'error', message: 'Method not allowed' })
}

export default handler
