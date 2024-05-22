import * as Yup from 'yup'

// Yup doğrulama şeması
export const registerValidationSchema = Yup.object({
  username: Yup.string()
    .min(5, 'Kullanıcı adı en az 5 karakter olmak zorunda')
    .required('Kullanıcı adı gerekli'),
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin')
    .required('E-posta gerekli'),
  password: Yup.string()
    .min(8, 'Şifre en az 8 karakter olmalı')
    .required('Şifre gerekli'),
})
