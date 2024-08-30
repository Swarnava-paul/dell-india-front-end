import { Flex , Grid , Text} from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import { displayNavbarMenuModal , hideNavbarMenuModal } from "../app/Slices/Slices"
const NavbarMenuModal = ({menuList,listPosition}) => {

  const navbarMenuModalDisplayControl = useSelector((state)=>state.Slice.navbarMenuModal)
  const dispatch = useDispatch();

  return (
   <Flex w='100%'
    height='100vh' display={navbarMenuModalDisplayControl} backgroundColor='rgb(30, 32, 30 , 0.5)'
     position='absolute' pos='fixed'>
    <Grid onMouseEnter={()=>{dispatch(displayNavbarMenuModal())
    }} 
   onMouseLeave={()=>dispatch(hideNavbarMenuModal())}
    w='20%' height='auto' borderRadius={4} maxHeight='60vh'
     bg='white'  ml={`${listPosition}%`}  pl={4} border='4px solid grey'>
     {
        menuList.map((i,index)=>(
            <Text key={index} cursor='pointer'>{i} <i style={{fontSize:"10px"}} className="fa-solid fa-chevron-right"></i></Text>
        ))
     }
    </Grid>
   </Flex>
  )
}

export default NavbarMenuModal
