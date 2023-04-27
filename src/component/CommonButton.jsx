import React from 'react'

const CommonButton = (props) => {
    const {bgColor,bgHoverColor,title,borderColor,hoverBorderColor,width,onClick } = props

  return (
    <div>
        <button onClick={onClick} className={`${width} ${bgColor} text-white  font-medium text-xl border-2 ${borderColor} py-3 px-6 m-1 ${bgHoverColor} hover:scale-105 ${hoverBorderColor} delay-75 transition rounded-md`}>
            {title}
        </button>
    </div>
  )
}

export default CommonButton