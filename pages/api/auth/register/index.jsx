const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = await req.body
    console.log(data)
    res.status(200).json({ message: 'User registered successfully', data })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
