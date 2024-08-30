import { border, Box , Flex , Image , Input , InputGroup} from "@chakra-ui/react"

import { SearchIcon } from "@chakra-ui/icons"
import { HamburgerIcon } from "@chakra-ui/icons"
/// components
import {HamburgerMenu , UserAccountMenuModal}  from '../components/Exports.components'
///<-- components
import { useSearchParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"
// redux 
import { useDispatch } from "react-redux"
import { displayHamburgerMenu ,
displayuserAccountModalDisplay , 
hideuserAccountModalDisplay} from "../app/Slices/Slices"


const FirstSectionNavbar = () => {
  const navigate = useNavigate('/error')

  const [user,setUser] = useState({name:"",email:""})
  
  const [searchParams] = useSearchParams();
    
  const token = searchParams.get('token');
  
  function reloadWindow () {
    navigate('/')
  }

  useEffect(()=>{
  if(token!=null) {
    localStorage.setItem('AuthToken',JSON.stringify(token));
    reloadWindow()
  }
  },[token]) // storing auth token

  const fetchUserInfo = async(AuthToken)=>{
    try{
    // eslint-disable-next-line no-undef
    const fetchUser = await fetch(process.env.NODE_ENV === 'development' ? 
    'http://localhost:4000/login/getUserInfo': 'https://dell-india-full-stack.onrender.com/login/getUserInfo' ,
    {
       method:"GET",
       headers:{
        Authorization : `Bearer ${AuthToken}`
       }
    })

    const result = await fetchUser.json();
    setUser({
      ...user,
      name:result.name,
      email:result.email
    })
    }catch (error) {
     setUser({
      ...user,
      name:"Sign in",
      email:"",
     })
    }
  } // handles retrive user name etc..


  useEffect(()=>{
  if(localStorage.getItem('AuthToken')) {
    // if token there make request and get user name and email
    const AuthToken = JSON.parse(localStorage.getItem('AuthToken'))
    fetchUserInfo(AuthToken);
  } else {
    // if no token set user state as sign in
    setUser({
      ...user,
      name:"Sign in"
    })
  }
  },[])


  const dispatch = useDispatch()
  const flex = {
   alignItems:"center",
   justifyContent:"space-between",
   fontSize:"0.9rem",
   gap:"4px",
   cursor:"pointer",
   height:'9vh'
  }
  return (
    <>
   <Box display='flex'  height='auto' alignItems='center' justifyContent='space-between'>

    <Box display={['grid','grid','flex','flex']}  w={['100%','100%','55%','50%']} placeItems='center'>
     <Flex align='center' w='100%' justify='space-between' display={['flex','flex','none','none']} pr={2} pl={2}>
      <HamburgerIcon fontSize={25} onClick={()=>{dispatch(displayHamburgerMenu())}}/>
     <Image src="https://i.ibb.co/hBfNqYw/Screenshot-2024-08-28-090859.png"/>
     <Box w='auto' minWidth='15%' display='flex' justifyContent='space-between' fontSize={15} alignItems='center'>
      {user.name == "Sign in" ? <i className="fa-regular fa-user" 
     onMouseEnter={()=>dispatch(displayuserAccountModalDisplay())} 
     onMouseLeave={()=>dispatch(hideuserAccountModalDisplay())}></i> :
    <p onMouseEnter={()=>dispatch(displayuserAccountModalDisplay())} 
     onMouseLeave={()=>dispatch(hideuserAccountModalDisplay())} >{user.name}</p>}
     <i className="fa-solid fa-cart-shopping"></i>
     </Box>
    </Flex> {/** hidden on big screens contain user icon hab=mburger icons... */}
    <Image mt={2} w='25%' display={['none','none','block','block']} src="https://i.ibb.co/hBfNqYw/Screenshot-2024-08-28-090859.png"/>
     <Flex align='center' border='1px solid grey' mt={3} w='80%' borderRadius={4} justify='space-evenly' h='4vh'>
      <Input outline='none' border='none' w='90%' h='100%' placeholder="Search For Laptops"/>
      <SearchIcon/>
     </Flex>
    </Box> {/**first Box */}

    <Box display={['none','none','flex','flex']} w='30%' alignItems='center' justifyContent='space-around' height='4vh' mt={2}>
      <Flex sx={flex} onMouseEnter={()=>dispatch(displayuserAccountModalDisplay())} onMouseLeave={()=>dispatch(hideuserAccountModalDisplay())}><i className="fa-regular fa-user" ></i><p>{user.name}</p><i className="fa-solid fa-chevron-down"></i></Flex>
      <Flex sx={flex}><i className="fa-solid fa-headphones"></i><p>Contact Us</p><i className="fa-solid fa-chevron-down"></i></Flex>
      <Flex sx={flex}><i className="fa-solid fa-cart-shopping"></i><p>Cart</p></Flex>
    </Box> {/** second Box */}

   </Box>
   <UserAccountMenuModal user={user}/>
  <HamburgerMenu/>

  </>
  )
}

export default FirstSectionNavbar