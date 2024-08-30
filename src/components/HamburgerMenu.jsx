import { Grid } from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import {hideHamburgerMenu } from "../app/Slices/Slices";

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const hamburegerDisplay = useSelector((state)=>state.Slice.hamburgerDisplay)
  return (
    <Grid backgroundColor='rgb(30, 32, 30 , 0.5)' display={hamburegerDisplay} w='100%' h='100vh' position='absolute' pos='fixed' top='0'>
     <Grid w={['70%','50%','0%','0%']} h='100%' bg='white'>
      <button onClick={()=>{dispatch(hideHamburgerMenu())}}>back</button>
     </Grid>
    </Grid>
  )
}

export default HamburgerMenu
