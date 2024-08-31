import { Grid , Image , Box  , Text} from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"

const HomeSecondSection = () => {

const [images,setImages] = useState(
[
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-laptops-xs9320.png?fmt=png-alpha&wid=480&hei=360",text:"Laptops"},
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/show-sb-dell-optiplex-7410-km5221w-uhp-2404-12-in-product-wayfinder-480x360.png?fmt=png-alpha&wid=480&hei=360",text:"Desktops & All-inOnes"},
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-monitor-s2722qc-480x360.png?fmt=png-alpha&wid=480&hei=360",text:"Monitors"},
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-pc-accessories-wb7022.png?fmt=png-alpha&wid=480&hei=360",text:"PC Accessories"},
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-apex-multicloud-aas-xs9315-stocksy2607481.jpg?fmt=png-alpha&wid=480&hei=360",text:"APEX Multicloud & aaS"},
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-enterprise-server-r760xa-480x360.png?fmt=png-alpha&wid=480&hei=360",text:"IT Infrastructure"},
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-gen-ai-solutions-getty1537473222.jpg?fmt=png-alpha&wid=480&hei=360",text:"AI Solutions"},
    {imageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-lifestyle-edge-480x360.jpg?fmt=png-alpha&wid=480&hei=360",text:"Edge Solutions"}
]
)

  return (
   <Grid bg='black' 
   templateColumns={['repeat(1,90%)','repeat(2,47%)','repeat(4,24%)','repeat(4,24%)']}
   justifyContent='center' pt={6}
   pb={10} gap={3} p={10} mt={['20vh','10vh','0vh','0vh']} cursor='pointer' >
     {
        images.map(({imageUrl,text},index)=>(
            <EachCart key={index} imageUrl={imageUrl} text={text}/>
        ))
     }
   </Grid>
  )
}


const EachCart = ({imageUrl,text}) => {

    return (
       <Link to='/productListingPage'>
        <Box bg='#F5F7F8'>
            <Text color='white' position='absolute' bg='black' p={[1,1,1,3]}>{text}</Text>
            <Image src={imageUrl}/>
        </Box>
       </Link>
    )
}

export default HomeSecondSection
