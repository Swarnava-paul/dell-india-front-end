import { Grid , Text} from "@chakra-ui/react"
import EachCard from "../SelectedTypeComponents/EachCard"
import { useEffect,useState } from "react"

const CartComponentMain = () => {

  const [data,setData] = useState([]);
  const [loadingState,setLoadingState] = useState(false);

  async function fetchCartData() {
    setLoadingState(true)
    const authToken = JSON.parse(localStorage.getItem('AuthToken'));
   try {
    // eslint-disable-next-line no-undef
    const data = await fetch(process.env.NODE_ENV == 'development' ? 'http://localhost:4000/service/getCart':
      'https://dell-india-full-stack.onrender.com/service/getCart',
      {
        method:"GET",
        headers : {
          Authorization :`Bearer ${authToken}`
        }
      }
    )
    const cartData = await data.json();
    setData(cartData.products)
    setLoadingState(false)
   }catch(error) {
    setLoadingState(false)
    console.log(error);
    
   }
  }
  useEffect(()=>{
   fetchCartData()
  },[])
  return (
    <Grid w='100%' placeItems='center' pt={20} pb={20} rowGap={5}>
      {
       (loadingState == true ? (<Text>Loading Please Wait</Text>) : data && data.map((i,index)=>(
        <EachCard key={index} props={i} cartButtonDisplay={'none'}/>
       )))
      }
    </Grid>
  )
}

export default CartComponentMain
