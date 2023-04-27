import { useState } from 'react'

import CommonButton from './component/CommonButton'
import TaskCard from './component/TaskCard'
import TaskSaveCard from './component/TaskSaveCard'

function App() {
  const[addButtonStatus,setAddButtonStatus] = useState(false)

  return (
    <div className='px-32 py-20'>
      {/* <CommonButton title={"Save"} bgColor={"bg-blue-600"} bgHoverColor={""} borderColor={"border-sky-700"} hoverBorderColor={"border-sky-800"} />
      <CommonButton title={"Update"} bgColor={"bg-green-600"} bgHoverColor={""} borderColor={"border-sky-700"} hoverBorderColor={"border-sky-800"} /> */}
      
      <div className='flex justify-end'>
        <CommonButton title={addButtonStatus ? "Close" : "+ Add Task"}
          bgColor={addButtonStatus ? "bg-red-700" : "bg-blue-700"} width={"w-48"} bgHoverColor={""} 
          borderColor={addButtonStatus ? "border-red-700" : "border-blue-700"} hoverBorderColor={""} 
        onClick={()=>setAddButtonStatus(!addButtonStatus)}
        />
      </div>
      <div>
        {addButtonStatus && <TaskSaveCard/>}
      </div>
      
      <div className='space-y-5'>
      <TaskCard title={"task title"} description={"task desc"} dueDate={"2023-04-26"} states={"done"}/>
      <TaskCard/>
      </div>
    </div>
  )
}

export default App
