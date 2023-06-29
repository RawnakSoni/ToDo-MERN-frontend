import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const ToDo = ( {text, updateMode, deleteToDo} ) => {
  return (
    <div className= 'todo'>
      <div className= 'text'> {text} </div>
      <div className= 'icons'>
        <BiEdit className= 'icon' onClick= {updateMode} />
        <BsFillCheckCircleFill className= 'icon2' onClick= {deleteToDo} />
      </div>
    </div>
  )
}

export default ToDo
