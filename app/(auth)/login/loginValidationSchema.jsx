import * as Yup from 'yup'

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin')
    .required('E-posta gerekli'),
  password: Yup.string().required('Şifre gerekli'),
})
