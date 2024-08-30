import { Flex , Text} from "@chakra-ui/react";
import { useState, useReducer } from "react";
import NavbarMenuModal from "./NavbarMenu.modal";
import { useDispatch } from "react-redux";
import { displayNavbarMenuModal,hideNavbarMenuModal } from "../app/Slices/Slices";

function deterMineMenuList (state,action) {
const {payload} = action;
switch(action.type) {
case 'It Infrastructure' :{
  return {
    menuList : payload[0]
  }
}

case 'Computers & Accessories' : {
  return {
    menuList : payload[1]
  }
}

case 'Services' : {
  return {
    menuList : payload[2]
  }
}

case 'Support' : {
  return {
    menuList : payload[3]
  }
}
case 'Deals' : {
  return {
    menuList: payload[4]
  }
}
}
}

const SecondSection = () => {

  const [menuState,dispatch] = useReducer(deterMineMenuList,{menuList:[]});
  const [listPosition,setListPosition] = useState(10)
  const dispatchRedux = useDispatch();

  const [menus,setMenus] = useState([
    ['Dell APEX Multicloud & aaS','Products','Workloads','Industry','Payment Solutions','Developers & DevOps'],
    ['Laptops','Desktops & All-in-Ones','Computers Monitors','Gaming','PC Assessories','Parts, Battiries & Upgrades','Thin Clients','Worksations'],
    ['View All Services','Professional Services','Lifecycle Services','Training & Certifications','Technology & Tools'],
    ['Support Home','Support Library','Support Videos','Drivers & Downloads','Manuals & Documentation','Self-Repair & Parts'],
    ['View All Deals','Laptops Deals','Desktop Deals','Gaming PC Deals','Business Deals','Monitor Deals']
  ])


  const downArrowIcon = <i className="fa-solid fa-chevron-down"></i>
  const childsFlexes = {alignItems:"center",cursor:"pointer",height:"6vh"}
  const parentFlex ={fontSize:"14px",align:"center",color:"#606676"
  ,width:"65%",justifyContent:"space-between"}

  return (
    <>
    <Flex mt={5} sx={parentFlex} ml={3} display={['none','none','none','flex']}>
      <Flex sx={childsFlexes}><Text>Artificial Intelligence</Text></Flex>
      <Flex sx={childsFlexes}  onMouseEnter={()=>{setListPosition(10),dispatch({type:"It Infrastructure",payload:menus}),
      dispatchRedux(displayNavbarMenuModal())}} onMouseLeave={()=>dispatchRedux(hideNavbarMenuModal())}><Text>It Infrastructure</Text>{downArrowIcon}</Flex>
      <Flex sx={childsFlexes} onMouseEnter={()=>{setListPosition(20),dispatch({type:"Computers & Accessories",payload:menus})
      ,dispatchRedux(displayNavbarMenuModal())}} onMouseLeave={()=>dispatchRedux(hideNavbarMenuModal())}><Text>Computers & Accessories</Text>{downArrowIcon}</Flex>
      <Flex sx={childsFlexes} onMouseEnter={()=>{setListPosition(30),dispatch({type:"Services",payload:menus}),
      dispatchRedux(displayNavbarMenuModal())}} onMouseLeave={()=>dispatchRedux(hideNavbarMenuModal())}><Text>Services</Text>{downArrowIcon}</Flex>
      <Flex sx={childsFlexes} onMouseEnter={()=>{setListPosition(40),dispatch({type:"Support",payload:menus}),
     dispatchRedux(displayNavbarMenuModal())}} onMouseLeave={()=>dispatchRedux(hideNavbarMenuModal())}><Text>Support</Text>{downArrowIcon}</Flex>
      <Flex sx={childsFlexes} onMouseEnter={()=>{setListPosition(50),dispatch({type:"Deals",payload:menus})
    ,dispatchRedux(displayNavbarMenuModal())}} onMouseLeave={()=>dispatchRedux(hideNavbarMenuModal())}><Text>Deals</Text>{downArrowIcon}</Flex>
      <Flex sx={childsFlexes}><Text>Find a Store</Text></Flex>
    </Flex>
    <NavbarMenuModal menuList={menuState.menuList} listPosition={listPosition}/>
    </>
  )
}

export default SecondSection;