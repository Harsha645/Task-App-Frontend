import React from 'react'
import CommonButton from './CommonButton'

const TaskSaveCard = () => {
  return (
    <div className=' mt-5 p-5 border-2 border-neutral-900 shadow-2xl '>
        <div className='flex justify-between items-center w-full space-x-12'>
            <input type='text' placeholder='Task Title' className='w-1/2 border-2 border-zinc-800 py-2 pl-2 shadow-xl' />
            <input type='text' placeholder='Task Description' className='w-1/2 border-2 border-zinc-800 py-2 pl-2 shadow-xl' />
        </div>
        <div className='w-full mt-5'>
            <input type='text' placeholder='Task Title' className='w-full border-2 border-zinc-800 py-2 pl-2 shadow-xl' />
        </div>
        <div className='flex justify-end items-center mt-2'>
            <CommonButton title={"+ Save Task"} width={"w-48"} bgColor={"bg-blue-600"} bgHoverColor={""} borderColor={"border-red-700"} hoverBorderColor={"border-sky-800"} />
        </div>
    </div>
  )
}

export default TaskSaveCard