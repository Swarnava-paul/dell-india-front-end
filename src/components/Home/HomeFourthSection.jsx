import { Flex , Text , Box , Image , Button } from "@chakra-ui/react"
import { useEffect,useRef, useState } from "react"

const HomeFourthSection = () => {
    const intervalId = useRef();
    const [position,setPosition] = useState(0);
    const [count,setCount] = useState(0);
    const[image,setImage] = useState([
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/documents-and-videos/dv2/b2b/en/product-launch/monitors/1-monitor-brand/site-banners/cs2401g0057-704478-gl-cs-co-site-banner-u4025qw-1610x906.jpg?wid=1610&hei=906",
    head:"OPTIPLEX DESKTOPS",
    head1:"Everything You Need. One Machine.",
    head2:"All your everyday computing needs, designed together."
    },
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-sb-dell-poweredge-r750xs-uhp-2501-03-in-promo-carousel-lf-1610x906.jpg?wid=1610&hei=906",
    head:"VOSTRO LAPTOPS",
    head1:"Any Task. Any Place.",
    head2:"Tackle all your to-dos from any location with built-in security and reliable support."
    },
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-sb-dell-km7321w-wh5024-da310-uhp-2503-03-in-promo-c-lf-v1-1610x906.jpg?wid=1610&hei=906",
    head:"DELL MONITORS",
    head1:"Dell Monitors Are #1 Worldwide for 10 Years!*",
    head2:'Dell Monitors Are #1 Worldwide for 10 Years!*'
    },
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-sb-dell-inspiron-7441-uhp-2503-03-in-promo-c-lf-1610x906.jpg?wid=1610&hei=906",
    head:"POWERSTORE",
    head1:"The Future of Storage",
    head2:"Future-proof intelligent storage that redefines performance."
    },
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-sb-dell-optiplex-7420-kb216-ms116-uhp-2503-03-in-promo-c-lf-1610x906.jpg?wid=1610&hei=906",
    head:"INSPIRON LAPTOPS",
    head1:"Stylish, Modern Laptops.",
    head2:"Get game-changing performance and efficiency with Snapdragon® X on Copilot+ PCs."
    }
    ])
    const [scrollMinus,setScrollMinus] = useState(0);

     function handleResize  () {
      const windowWidth = window.innerWidth;
        if(windowWidth > 1000) {
            setScrollMinus(900)
        } else if (windowWidth > 600 && windowWidth < 900) {
           setScrollMinus(700)
        } else {
            setScrollMinus(300)
        }
      }

      useEffect(()=>{
      handleResize();
      },[])


    useEffect(()=>{
        if(intervalId.current) {
            clearInterval(intervalId.current)
        }
        if(count > 5) {
            setCount(0);
            setPosition(0);
            clearInterval(intervalId.current)
        }
        intervalId.current = setInterval(()=>{
            setCount(count=>count+1)
             setPosition(position=>position+scrollMinus)
            },4000)

    },[position,scrollMinus])
    console.log(scrollMinus);
    

  return (
    <Box w='100%' bg='RGB(20, 29, 40)' p={10}>
        <Flex w='100%' overflowX='scroll' className="featuresAutoScrollDivATHomePage">
            <Flex gap={['10px','10px','150px','270px']} pl='10%' transform={`translateX(-${position}px)`} transition='0.50s'>
              {image.map((i,index)=>(
                <EachImageSection key={index} props={i}/>
              ))}
            </Flex>
        </Flex>
    </Box>
  )
}


const EachImageSection = ({props}) => {
const {imageUrl,head,head1,head2} = props;
return (
    <>
    <Box w={['300px','400px','700px','900px']} pos='relative' display={['none','none','block','block']}>
    <Box pos='absolute' m='20% 15% 15% -15%' backgroundColor='white' w='39%' h='auto' display='grid'
    rowGap={4} pl={3} pb={4} borderRadius={5} pt={2}>
     <Text>{head}</Text>
     <Text fontSize='30px'>{head1}</Text>
     <Text>{head2}</Text>
     <Flex justify='center' gap={5}>
      <Button bg='RGB(0, 99, 184)' w='40%' h='6vh' borderRadius={4} color='white' >Shop All</Button>
      <Button bg='black' color='white' w='40%' borderRadius={4} >Learn More</Button>
      </Flex>
    </Box>
    <Image src={imageUrl}/>
    </Box>

    <Box display={['grid','grid','none','none']} border='1px solid white' w='300px' >
     <Image src={imageUrl}/>
     <Box display='grid' color='black' bg='white' 
     rowGap={10} pb={2} borderBottomLeftRadius={4} borderBottomRightRadius={4} pl={2}>
      <Text>{head}</Text>
      <Text>{head1}</Text>
      <Text>{head2}</Text>
      <Flex justify='center' gap={5}>
      <Button bg='RGB(0, 99, 184)' w='40%' borderRadius={4} color='white' fontSize={13}>Shop All</Button>
      <Button bg='black' color='white' w='40%' borderRadius={4} fontSize={13}>Learn More</Button>
      </Flex>
     </Box>
    </Box>
    </>
)
}

export default HomeFourthSection

