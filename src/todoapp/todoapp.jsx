import React, { useState } from 'react'
import style from './todoapp.module.css'
// import { IoIosAddCircle } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const TodoApp = () => {
    const [input,setInput] = useState('')
    const [items,setitems] = useState([])

    const addItem =()=>{
        if(input){

            setitems([...items,input])
            setInput("")
            return
        }
    }

    const deleteAll = ()=>{
        setitems([])
    }

    const deleteSingleItem = (index)=>{

        const filterData = items.filter((e,i)=>{
            return index !== i
        })
        setitems(filterData)
    }
    
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Todo App</h1>

      <input className={style.input} value={input} type="text" placeholder='Enter items..' onChange={(e)=>{
        setInput(e.target.value)
      }}/>
      <button className={style.add}><IoMdAdd  onClick={addItem} /></button>
      <button onClick={deleteAll} className={style.dlt}> Delete All </button>

{
    items.map((element,index)=>{
        return(
            
            <li className={style.li} key={index}>
                {element}<MdDelete className={style.sd} onClick={()=>deleteSingleItem(index)}/>
            </li>
        )
    })
}
    </div>
  )
}

export default TodoApp