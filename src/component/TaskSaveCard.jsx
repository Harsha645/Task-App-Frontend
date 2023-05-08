import React, { useState } from 'react'
import CommonButton from './CommonButton'
import axios from 'axios'





const TaskSaveCard = (props) => {
  const { loadTasks } = props
  const [newTask, setNewTask] = useState({ status: "n/a" })

  const handleChange = (event) => {
    //console.log(event.target.value);
    setNewTask({ ...newTask, [event.target.name]: event.target.value })
    // console.log(newTask);
  }
  const saveTask = () => {
    axios.post("http://localhost:5000",newTask)
    .then(res => {
      if (res.status === 200) {
        //alert("Task Saved");
        loadTasks();
      }
    })
    .catch(err => console.log(err))

  }

  return (
    <div className=' mt-5 p-5 border-2 border-neutral-900 shadow-2xl '>
      <div className='flex justify-between items-center w-full space-x-12'>
        <input type='text' placeholder='Task Title' name="title" className='w-1/2 border-2 border-zinc-800 py-2 pl-2 shadow-xl' onChange={handleChange} />
        <input type='text' placeholder='Task Description' name="description" className='w-1/2 border-2 border-zinc-800 py-2 pl-2 shadow-xl' onChange={handleChange} />
      </div>
      <div className='w-full mt-5'>
        <input type='date' placeholder='Due Date' name="dueDate" className='w-full border-2 border-zinc-800 py-2 px-2 shadow-xl' onChange={handleChange} />
      </div>
      <div className='flex justify-end items-center mt-2'>
        <CommonButton title={"+ Save Task"} width={"w-48"} bgColor={"bg-blue-600"} bgHoverColor={""} borderColor={"border-red-700"} hoverBorderColor={"border-sky-800"}
          onClick={() => saveTask()} />
      </div>
    </div>
  )
}

export default TaskSaveCard