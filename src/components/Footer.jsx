import { Grid } from "@chakra-ui/react"
import { useState  } from "react"
import {EachSectionOfFooter} from '../components/Exports.components'

const Footer = () => {
  const [footerMenus,setFooterMenus] = useState([
    {
      head:"Account",
      subMenu:["My Account","Order Status","Profile Settings","My Products"]
    },
    {
      head:"Support",
      subMenu:['Support Home','Contact Technical Support','Returns']},
    {
      head:"Connect With Us",
      subMenu:["Community","Contact Us"]
    },
    {
      head:"Our Offerings",
      subMenu:["Artificial Intelligence","Products,Solutions","Services,Deals"]
    },
    {
      head:'Our Company',
      subMenu:['Who We Are','Careers','Dell Technologies Capital','Investors','Newsroom','Perspectives','Recycling','ESG & Impact','Customer Stories']
    },
    {
      head:"Our Partners",
      subMenu:['Find a Partner','OEM Solutions','Partner Program']
    },
    {
      head:'Resources',
      subMenu:['Blog','Dell Rewards','Events','Email Sign-Up','Privacy Centre','Resource Library','Security & Trust Centre','Trial Software Downloads']
    }
  ])

  return (
    <>
    <Grid bg='whitesmoke' w='100%' templateColumns='repeat(3,32%)'
     justifyContent='center' rowGap={6} columnGap={3}
     p={10} h='auto'  pb='120px'>
      {
       footerMenus.map((i,index)=>(
        <EachSectionOfFooter key={index} props={i}/>
       ))
      }
    </Grid>
    </>
  )
}

export default Footer
