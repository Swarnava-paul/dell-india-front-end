import { Grid , Button } from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import {displayHamburgerMenu, hideHamburgerMenu } from "../app/Slices/Slices";
import { useState } from "react";
import { ResponsiveFooterSmallScreens } from "./Footer/EachSectionOfFooter";

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const [hamburgerMenuItems,setHamburgerMenuItems] = useState([
    {
      head:"It Infrastructure",
      subMenu:['Dell APEX Multicloud & aaS','Products','Workloads','Industry','Payment Solutions','Developers & DevOps'],
    },
    {
      head:"Computers & Accessories",
      subMenu:['Laptops','Desktops & All-in-Ones','Computers Monitors','Gaming','PC Assessories','Parts, Battiries & Upgrades','Thin Clients','Worksations'],

    },
    {
      head:"Services",
      subMenu:['View All Services','Professional Services','Lifecycle Services','Training & Certifications','Technology & Tools'],

    },
    {
      head:"Support",
      subMenu:['Support Home','Support Library','Support Videos','Drivers & Downloads','Manuals & Documentation','Self-Repair & Parts'],

    },
    {
      head:"Deals",
      subMenu:['View All Deals','Laptops Deals','Desktop Deals','Gaming PC Deals','Business Deals','Monitor Deals']

    }
  ])
  const hamburegerDisplay = useSelector((state)=>state.Slice.hamburgerDisplay)
  return (
    <Grid backgroundColor='rgb(30, 32, 30 , 0.5)' display={hamburegerDisplay}  w='100%'   pos='absolute' top='0'>
     <Grid w={['80%','50%','0%','0%']} bg='white' rowGap={2} h='auto' minHeight='100vh'>
      <Button w='40%' h='6vh' onClick={()=>dispatch(hideHamburgerMenu())}>
      <i className="fa-solid fa-chevron-left"></i>
      Back
      </Button>
       {
        hamburgerMenuItems.map((i,index)=>(
          <ResponsiveFooterSmallScreens key={index} props={i} 
          hideIcon={<i className="fa-solid fa-angle-right"></i>}
           openIcon={<i className="fa-solid fa-chevron-left"></i>}
           paddingLeft={12}
           />
        ))
       }
     </Grid>
    </Grid>
  )
}

export default HamburgerMenu
