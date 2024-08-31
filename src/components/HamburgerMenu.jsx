import { Grid } from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import {displayHamburgerMenu, hideHamburgerMenu } from "../app/Slices/Slices";

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const hamburegerDisplay = useSelector((state)=>state.Slice.hamburgerDisplay)
  return (
    <Grid backgroundColor='rgb(30, 32, 30 , 0.5)' display={hamburegerDisplay} onMouseEnter={()=>dispatch(hideHamburgerMenu())}  w='100%' h='100vh'  pos='absolute' position='fixed' top='0'>
     <Grid w={['70%','50%','0%','0%']} h='100%' bg='white' border='2px solid red'>
      <button onClick={()=>{dispatch(hideHamburgerMenu())}}>back</button>
     </Grid>
    </Grid>
  )
}

export default HamburgerMenu
