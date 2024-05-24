const checkPriority = (priority) => {
  switch (priority) {
    case 'LOW':
      return 'font-bold bg-green-500 text-white p-2 px-4 text-sm rounded-full'
    case 'MEDIUM':
      return 'font-bold bg-orange-600 text-white p-2 px-4 text-sm rounded-full'
    case 'HIGH':
      return 'font-bold bg-red-600 text-white p-2 px-4 text-sm rounded-full'
    default:
      return ''
  }
}

export default checkPriority
