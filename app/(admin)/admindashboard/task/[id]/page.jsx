'use client'

import { useEffect, useState } from 'react'
import { getAPI } from '../../../../../services/fetchAPI/index.js'
import Loading from '../../../../../components/loading/index.jsx'
import { formatDate } from '../../../../../lib/utils/formatter.js'
import Button from '../../../../../components/Buttons/Button'

const TaskPage = ({ params }) => {
  const [taskDetail, setTaskDetail] = useState([])
  useEffect(() => {
    const getTask = async () => {
      const res = await getAPI(`/tasks/${params.id}/get-task`)
      setTaskDetail(res.task)
    }
    getTask()
  }, [])
  if (taskDetail.length <= 0) {
    return <Loading />
  }

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

  return (
    <div className="flex flex-col gap-4">
      <div className="border-b flex flex-col gap-4 pb-4">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4 ">
            <h1 className="text-4xl font-bold">{taskDetail.title}</h1>
            <p className={checkPriority(taskDetail.priority)}>
              {taskDetail.priority} <span>PRIORITY</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              title={'Update'}
              className={
                'bg-blue-500 text-white p-2 px-4 text-sm rounded-lg hover:bg-blue-400 font-semibold'
              }
            />

            <Button
              title={'Delete'}
              className={
                'bg-red-500 text-white p-2 px-4 text-sm rounded-lg hover:bg-red-400 font-semibold'
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>Created Date : {formatDate(taskDetail.createdAt)}</p>
          <p className="font-bold ">
            Status:
            <span className="text-lg font-medium ml-2">
              {taskDetail.status}
            </span>
          </p>
        </div>
        <p className="text-lg">{taskDetail.description}</p>
      </div>
      <div className="flex flex-col gap-4 border-b pb-4">
        <h2 className="uppercase text-2xl font-semibold">Team</h2>
        <div className="flex flex-col gap-3">
          {taskDetail.assignedUsers.map((teamMember) => (
            <div className="flex items-center gap-3" key={teamMember.user.id}>
              <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                <span className="text-white font-bold">T</span>
              </div>
              <div>
                <p>{teamMember.user.username}</p>
                <p className="text-sm text-gray-500">{teamMember.user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold uppercase">Sub-Tasks</h2>
        <div className="flex flex-col gap-2">
          {taskDetail.subtasks.map((subtask) => (
            <div
              key={subtask.id}
              className="flex flex-col gap-2 items-start border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <p>Last Date: {formatDate(subtask.createdAt)}</p>
                <p className="bg-orange-300 p-1 px-2 text-sm font-semibold text-white rounded-lg  ">
                  {subtask.status ? 'done' : 'in progress'}
                </p>
              </div>
              <p>{subtask.title}</p>
              <Button
                title={'SubTask as done'}
                className={
                  'bg-gray-200 p-2 px-4 rounded-lg font-semibold text-sm text-gray-600 hover:bg-green-400 hover:text-white'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default TaskPage
