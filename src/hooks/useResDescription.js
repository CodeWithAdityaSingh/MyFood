import { useEffect, useState } from "react"

let useResDescription = (id)=>{
    
    let[menuData,setMenuData] = useState(null)

    

  useEffect(()=>{
    fech()
  },[])
  
  let fech = async ()=>{
    let data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2058593&lng=72.86612&restaurantId='+id+'&catalog_qa=undefined&submitAction=ENTER')

    let json = await data.json()
    setMenuData(json.data.cards)

 
    
  }


  return menuData



}

export default useResDescription;