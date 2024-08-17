import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addFilterinfo, addResInfo } from "../utils/ResDataSlice"

let useCardContainer = ()=>{
    let dispatch = useDispatch()

    useEffect(()=>{
    
        fech()
     },[])
    
     let fech = async ()=>{
    
      let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    
      let json = await data.json()
    
      dispatch(addResInfo(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))
    
      dispatch(addFilterinfo(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))
    
      console.log(json);
      
    }
}

export default useCardContainer;