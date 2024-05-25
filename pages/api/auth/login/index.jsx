import bcrypt from 'bcrypt'

import { getDataByUnique } from '../../../../services/servicesOperations'

const handler = async (req, res) => {
  if (!req) {
    return res
      .status(500)
      .json({ status: 'error', message: 'Bir hata oluştu!' })
  }

  if (req.method === 'POST' && req.body) {
    const { email, password } = req.body
    const user = await getDataByUnique('User', { email })

    // Kullanıcı yoksa veya şifre eşleşmiyorsa hata gönder
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ status: 'error', message: 'E-posta veya şifre hatalı' })
    }

    return res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: { user, role: user.role },
    })
  } else {
    console.log("pataladı");
    return res
      .status(405)
      .json({ status: 'error', message: 'Method not allowed' })
      
  }
}

export default handler
