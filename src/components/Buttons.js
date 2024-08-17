import React from 'react'
import { buttonsList } from '../utils/constans'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addFilterinfo, addResId } from '../utils/ResDataSlice'
import { useDispatch } from 'react-redux'

const Buttons = () => {

  let selector = useSelector((store)=> store.resData.resInfo)
  let dispatch = useDispatch()




  
  return (
    <div className='flex items-center justify-around'>
     {
        buttonsList.map((items)=><Link to={'/info'}> <span className='boder w-32 flex cursor-pointer hover:bg-slate-100  p-2 shadow-lg mx-4 rounded-md font-bold' onClick={()=>{
      

          let data = selector.filter((elem)=>{

            return   elem.info.name.includes(items)
          })

          // console.log(data);


          // dispatch(addResId(data.map((elem)=>{
          //        return elem.info.id
          // })))
          


          dispatch(addFilterinfo(data))

          

          
          

        }}>{items}</span></Link>)
     }
    </div>
  )
}

export default Buttons
