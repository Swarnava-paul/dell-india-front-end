import { Flex , Grid , Box } from "@chakra-ui/react"
import { FilterHolder , EachSections} from "../components/Exports.components"
import { useState } from "react"

//redux
import { useSelector  , useDispatch} from "react-redux"
import { displayFilterMenu,hideFilterMenu } from "../app/Slices/Slices"
const ProductListingPage = () => {

  const filterMenuDisplayForSmallScreens = useSelector((state)=>state.Slice.filterMenu);
  const dispatch = useDispatch();

  const [eachListings,setEachListings] = useState([
    {imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy24-family-launch/prod-312204-apjc-laptop-xps-16-9640-14-9440-13-9340-800x620-pl-gr.png?fmt=png-alpha&wid=800&hei=620',
    head:'XPS Laptops',tagLine:'Creators & Creativity Starting at ₹1,55,289.97',description:"Power your passions with premium, precision-crafted laptops with innovative features.",buttonName:"XPS"},
    {imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/documents-and-videos/dv2/b2b/en/product-launch/latitude/fy25-latitude-family/site-banners/bb2501g0003-gl-bb-site-banner-fy25-latitude-9450-800x620.png?fmt=png-alpha&wid=800&hei=620'
    ,head:'Latitude Laptops & 2-in-1 PCs',tagLine:'Business Performance & Collaboration Starting at ₹94,300.18',description:"Work from anywhere with our most intelligent and secure business laptops sustainably designed for productivity on the go",buttonName:"Latitude"},
    {imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/in7440t-ctb-00035rf305-ice-bl-sc-my-right.png?fmt=png-alpha&wid=800&hei=620'
    ,head:'Inspiron Laptops & 2-in-1 PCs',tagLine:'Versatile Performance Starting at ₹35,589.99',description:"Make your personal or work life easier with versatile and secure Inspiron laptops and 2-in-1s",buttonName:"Inspiron"},
    {imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy24-family-launch/laptop-vostro-16-5640-fpr-gy-gallery-lf2-800x620.png'
    ,head:'Vostro Laptops',tagLine:'Small Business Productivity Starting at ₹35,990.00',description:"Power your small business with laptops built to deliver security, performance and enhanced video conferencing.",buttonName:"Vostro"},
    {imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/cs2404g0018-700634-gl-cs-co-fy24q4-category-banner-aw-m16-r2-800x620-a.png'
    ,head:'Alienware Gaming Laptops',tagLine:'Immersive Gaming Experiences Starting at ₹1,55,490.01',description:"Experience high-performance gaming with iconic designs and intelligently engineered laptops.",buttonName:"AlienWare"},
    {imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/g-series-16-7630-laptop-lf-800x620.png?fmt=png-alpha&wid=800&hei=620'
    ,head:'G Series Gaming Laptops',tagLine:'Gaming Performance Starting at ₹75,589.99',description:"Take your game to the next level with split-second responsiveness and dynamic gameplay.",buttonName:"G series"},
    {imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/documents-and-videos/dv2/b2b/en/product-launch/precision/fy24-precision-5690-mobile-workstation-mlk/site-banners/bb2501g0010-gl-bb-fy24-mobile-workstation-precision-16-5690-mlk-site-banner-800x620-left.png?fmt=png-alpha&wid=800&hei=620'
    ,head:'Precision Mobile Workstations',tagLine:'Advanced Users & Applications',description:"Take your ideas to the next level with the world’s #1 workstations*; optimized for performance, reliability and user experience.",buttonName:"Precision"},
    {
      imageUrl:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/chromebook/chromebook-11-3120/spi/2-in-1/laptop-2-in-1-3120-pdp-hero-800x620.png?fmt=png-alpha&wid=800&hei=620',
      head:'Chromebooks',
      tagLine:"Cloud-native Versatility",
      description:'Meet the needs of all levels of users with cloud-native security—for the virtual learning environment all the way to enterprise business level.',
      buttonName:"ChromeBook"
    }
  ])
  return (
    <>
    <Grid w='90%' border='1px solid blue'
    borderRadius={4} margin='auto'
    mt={8}  display={['grid','grid','none','none']}
    onClick={()=>dispatch(displayFilterMenu())}>
    <Flex justify='center' align='center'gap={4} color='blue'>
    <i className="fa-solid fa-sliders"></i>
      Filters
    </Flex>
    </Grid> {/** hold filter menu icon only visible for small screen sizes */}

    <Box mt={16} margin='auto' bg='white' w='90%' display={filterMenuDisplayForSmallScreens} pb='30%'>
    <FilterHolder/>
     </Box> {/** hold whole filter menu only visible for small screen sizes */}

    <Flex w='100%' pb={10}  justify='space-between' 
    justifyContent='center' mt={8} gap={5} display={filterMenuDisplayForSmallScreens==='none'?'flex' :'none'}>
      
       <Box display={['none','none','grid','grid']}
        w='25%'>
       <FilterHolder/>
       </Box>

       <Grid  w={['90%','90%','80%','70%']} rowGap={10}>
         {
          eachListings.map((i,index)=>(
            <EachSections key={index} props={i} index={index}/>
          ))
         }
       </Grid>
    </Flex>
    </>
  )
}

export default ProductListingPage


/***
display={['none','none','grid','grid']}
 */