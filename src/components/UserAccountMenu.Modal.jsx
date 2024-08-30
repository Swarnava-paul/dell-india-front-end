import { Flex , Grid , Text , Button} from "@chakra-ui/react"
import { useSelector  , useDispatch} from "react-redux"
import { displayuserAccountModalDisplay , hideuserAccountModalDisplay } from "../app/Slices/Slices"

const UserAccountMenuModal = ({user}) => {

    const dispatch = useDispatch();
    const displayUserAccountModal = useSelector((state)=>state.Slice. userAccountModalDisplay);

    function handleLogin () {
    const productionurl = 'https://dell-india-full-stack.onrender.com/login/auth/google';
    // eslint-disable-next-line no-undef
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/login/auth/google' : productionurl;
   try{
    window.location.href=url;
   } catch(error) {
    //navigate('/error')
   }
  } // we will call this function later on sign in button on users menu

  function handleLogout() {
 localStorage.removeItem('AuthToken');
 window.location.reload()
}

  return (
   <Flex width='100%'display={displayUserAccountModal}  height='100vh' mt={3} justify='flex-end' backgroundColor='rgb(30, 32, 30 , 0.5)' position='absolute' pos='fixed'>
   <Grid bg='white' onMouseLeave={()=>dispatch(hideuserAccountModalDisplay())}
    onMouseEnter={()=>dispatch(displayuserAccountModalDisplay())} width={['90%','60%','30%','30%']} 
     mr={['5%','15%','15%','15%']} borderBottomRightRadius={4} pl={10} pr={10} borderBottomLeftRadius={4} placeItems='center' height='40vh' rowGap={2}>
    <Text>hi {user.name} Welcome to Dell</Text>
    {user.name!='Sign in' ? <Button bg='whitesmoke' w='40%' p={1} borderRadius={2}>My Account</Button> : null}
    <ul>
        <li>Place orders quickly and easily</li>
        <li>View orders and track your shipping status</li>
        <li>Create and access a list of your products</li>
    </ul>
   <Button onClick={()=>{
    if(user.name == 'Sign in') {
        handleLogin()
    } else {
        handleLogout()
    }
   }} bg='RGB(0, 99, 184)' w='80%' p={2} borderRadius={3} color='white'>{user.name == 'Sign in' ? 'Sign in' : "Logout"}</Button>
   </Grid>
   </Flex>
  )
}

export default UserAccountMenuModal
