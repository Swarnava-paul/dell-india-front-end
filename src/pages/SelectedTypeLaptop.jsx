import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Grid , Box , Text , Image  } from "@chakra-ui/react";
import {EachCard} from '../components/Exports.components'

const SelectedType = () => {
  const {type} = useParams();
  const [key,value] = type.split("-")
  const [data,setData] = useState([]);
  const[loadingState,setLoadingState] = useState(false)

  const nKey = key.trim();
  const nValue = value.trim();

 const params =`${nKey}=${nValue}`
  async function fetchData () {
 // eslint-disable-next-line no-undef
    const fetchUrl = process.env.NODE_ENV ==='development' ? 
    `http://localhost:4000/service/getProduct?${params}` : 
    `https://dell-india-full-stack.onrender.com/service/getProduct?${params}`

    try {
     const data = await fetch(fetchUrl);
     const {laptops,message} = await data.json();
     setData(laptops);
     setLoadingState(false)
    }catch(error) {
      console.log(error);
      setLoadingState(false)
    }
  }
  
  useEffect(()=>{
   if(type) {
    // call api and fetch data
    fetchData()
    setLoadingState(true)
   }
  },[type])
  
  return (
    <Grid placeItems='center' p={20} rowGap={5}>
      {
       (loadingState === true ? 
      (<Text mt={10} textAlign='center' fontSize={20}>Loading Please Wait...</Text>): 
      data && data.map((i,index)=>(
        <EachCard key={index} props={i}/>
       )))
      }
    </Grid>
  )
}

export default SelectedType;
