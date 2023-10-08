import axios from "axios";
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import PackagesModule from "../../modules/Packages";
import { baseURL } from "../../modules/constant";
import Navbar from "../../components/navBar";


function Packages() {
  const [packagesInfo,setPackageInfo]=useState();
  
  const {package_id}=useParams();
  const url=`${baseURL}/packages/${package_id}`
  useEffect(()=>{
    axios.get(url).then((response)=>{
        setPackageInfo(response.data)
    }).catch((err)=>{
        console.log(err)
    })
  },[])
  

  return (
    <div>
        <Navbar/>
        {
          packagesInfo?
          <PackagesModule packagesInfo={packagesInfo} />:
          <center>
            <h1 style={{color:"white",position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,50%)"}}>Loading...</h1>
          </center>
        }
    </div>
  )
}

export default Packages