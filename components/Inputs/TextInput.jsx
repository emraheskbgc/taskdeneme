import { Field } from 'formik'

const TextInput = ({ label, name, ...props }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name}>{label}</label>
    <Field
      id={name}
      name={name}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
      {...props}
    />
  </div>
)

export default TextInput
