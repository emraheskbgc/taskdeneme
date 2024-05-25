'use client'

import { postAPI } from '../../../services/fetchAPI'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { registerValidationSchema } from './registerValidationSchema'
import { useState } from 'react'

const RegisterPage = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          validateOnMount={true}
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={registerValidationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await postAPI('/auth/register', values)
              if (res.status == 'success') {
                setTimeout(() => {
                  router.push('/login')
                }, 3000)
              } else {
                setErrorMessage(res.message)
              }
            } catch (error) {
              console.error('API request failed:', error)
            }
            setSubmitting(false)
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.username}
                  />
                  {props.errors.username && props.touched.username && (
                    <div className="text-red-600 text-sm mt-1">
                      {props.errors.username}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                  />
                  {props.errors.email && props.touched.email && (
                    <div className="text-red-600 text-sm mt-1">
                      {props.errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                  />
                  {props.errors.password && props.touched.password && (
                    <div className="text-red-600 text-sm mt-1">
                      {props.errors.password}
                    </div>
                  )}
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-600 mt-4 text-center">{errorMessage}</p>
              )}
              <div className="mt-6">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={props.isSubmitting}
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegisterPage
