import { useEffect, useState } from "react"
import { baseURL } from "../../modules/constant"
import axios from "axios"
import DestinationModule from "../../modules/Destination";

function DestinationsPage() {

  const url=`${baseURL}/destinations/all`
  const [destinations,setDestinations]=useState();

  useEffect(()=>{
    axios.get(url).then((response)=>{
        setDestinations(response.data)
    }).catch((err)=>{
        console.log(err)
    })
  },[])

  return (
    <div>
        <DestinationModule destinations={destinations}/>
    </div>
  )
}

export default 
DestinationsPage