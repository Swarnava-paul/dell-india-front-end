import { Box, Text,Image , Grid , Flex, Button} from "@chakra-ui/react";
import ProductInfoForSelectedProductCard from "./ProductInfoForSelectedProductCard";
import { useSelector , useDispatch} from "react-redux";
import { displayuserAccountModalDisplay , } from "../../app/Slices/Slices";
const EachCard = ({props,cartButtonDisplay}) => {
  const {
    brand,model,display,graphics,
    imageUrl,os,price,processor,
    ram,storage,_id
  } = props;
const AuthState = useSelector((state)=>state.Slice.AuthenticationState);
const dispatch = useDispatch()

const addProductToCart = async () => {
  console.log('w');
  
  const authToken = JSON.parse(localStorage.getItem('AuthToken'))

  try{  
   // eslint-disable-next-line no-undef
   await fetch (process.env.NODE_ENV == 'development' ? 'http://localhost:4000/service/addCart' :
    'https://dell-india-full-stack.onrender.com/service/addCart',
    {
      method : "POST",
      headers : {
        Authorization : `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body  : JSON.stringify(props)
    }
    
   )
   alert('Product Addeed to cart')
  }catch(error) {
   //
   alert('Product Not added to Cart')
  }
}

  return (
    <Box w={['160%','130%','130%','95%','95%']} display={['grid','grid','flex','flex']}
   p={5} placeItems='center' borderRadius={4}
    boxShadow ="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
      <Image w={['70%','70%','27%','27%']}  src={imageUrl}/>
      <ProductInfoForSelectedProductCard props={props}/>
      <Grid w={['90%','80%','35%','40%']} margin='auto' mt={['4%','4%','0%','0%']} marginLeft={10}>
        <Box display='grid' rowGap={2} ml={10}>
          <Text fontWeight='600' fontSize={20}>{price}</Text>
          <Text fontSize={13}>Price inclusive of GST. Free Delivery.</Text>
          <Box display={['none','none','block','block']}>
          <Text mt={7}>Special Offers</Text>
          <ul style={{marginLeft:"17px",color:"RGB(0, 99, 184)", fontSize:"12px",marginTop:"9px"}}>
            <li>No Cost EMI available up to 12 Months.</li>
            <li>Get JBL Ear Buds Tune Beam worth ₹7,990 at ₹1999.</li>
            <li>Dell Rewards: Earn up to ₹10,000 on every purchase*.</li>
          </ul>
          <Text mt={4}>Financing</Text>
          <Flex gap={2} fontSize={12}>
            <Text color='RGB(0, 99, 184)'>No Cost Emi</Text>
            <Text>available . See options at checkout.</Text>
          </Flex>
          </Box>
        </Box>
        <Button display={cartButtonDisplay} margin='auto' pos='static' borderRadius={2} color='white' w='40%' 
          h='7vh' mt={5} bg='RGB(0, 99, 184)'
          onClick={()=>{
           if(AuthState) {
            // if authState = true then add product to cart post request to api with token
            addProductToCart();
           } else {
            //else display userAccountModal to tell user to sign in first
            dispatch(displayuserAccountModalDisplay())
           }
          }}>Add to cart</Button>
      </Grid>
    </Box>
  )
}

export default EachCard
