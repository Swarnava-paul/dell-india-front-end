import { Flex  , Box ,Text , Image , Button} from "@chakra-ui/react"
import { useEffect, useRef , useState } from "react"

const HomeFirstImageSlider = () => {
    const intervalId = useRef();
    const [indexofImageArray,setIndexOfImageArray] = useState(0)
    const [images,setImages]  = useState([{imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/imm/1440x720-banner/season-student-purchase-cons-dell-lifestyle-inspiron-7640nt-uhp-2503-01-in-imm-lf-1440x720-lr.png?fmt=png-alpha&amp;wid=1440&amp;hei=720",SeriesInfo:'XPS 13 & INSPIRON 14 PLUS',seriesTagline:'A New Generation of Pcs Is here',seriesDescription:'Get game-changing performance and efficiency with Snapdragon'},
        {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/show-sb-dell-latitude-7450-5550-gy-uhp-2503-03-in-hero-1024x768.jpg?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=768&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,768",SeriesInfo:'VOSTRO LAPTOPS',seriesTagline:'Any Task. Any Place.',seriesDescription:'Tackle your to-dos from any location with built-in security and reliable support.'},
        {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/043024-wecome-to-now-recipes-1023x768.jpg/?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=768&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,768",SeriesInfo:'WELCOME TO NOW',seriesTagline:'Revive History With Generative AI',seriesDescription:'Discover how GenAI is preserving memories and helping to write new ones.'}])


    useEffect(()=>{
      if(intervalId.current) {
        clearInterval(intervalId.current);
      } 
intervalId.current = setInterval(()=>{setIndexOfImageArray(indexofImageArray=>indexofImageArray === 2 ? 0 : indexofImageArray+1 )},4000);
    
      return ()=> clearInterval(intervalId.current);

    },[indexofImageArray])
console.log(indexofImageArray);

const color = {
  color:indexofImageArray==2 ? 'white':'black'
}

  return (
    <Box
    pb={20}
    w="100%"
    h="100vh"
    display='flex'
    justifyContent='space-between'
    backgroundImage={images[indexofImageArray].imageUrl}
    backgroundRepeat='no-repeat'
    backgroundPosition={['bottom','bottom','center','center']}
    backgroundSize={['unset','unset','cover','cover']}
  >
    <Box
      w={['90%','80%','30%','26%']}
      mt={['110%','30%','20%','10%']}
      ml={4}
      color='black'
      h='36vh'
      pb={3}
      display='grid' 
      rowGap={6}
     
    >
      <Text sx={color} fontWeight='700' fontSize={20}>{images[indexofImageArray].SeriesInfo}</Text>
      <Text sx={color}  fontSize='30px' fontWeight='700'>{images[indexofImageArray].seriesTagline}</Text>
      <Text sx={color} fontSize='20px' >{images[indexofImageArray].seriesDescription}</Text>
      <Flex justifyContent='space-between' h='7vh'>
      <Button pos='static' backgroundColor='RGB(0, 99, 184)' color='white' width='50%' borderRadius={3}>Shop All</Button>
      <Button pos='static'  width='48%' color='white' bg='black'>Learn More</Button>
      </Flex>
    </Box>
  </Box>
  )
}

export default HomeFirstImageSlider
