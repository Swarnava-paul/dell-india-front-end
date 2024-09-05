import CartComponentMain from "../components/cart/CartComponentMain"
import { useSelector , useDispatch } from "react-redux"
import { Text , Flex } from "@chakra-ui/react";
import { displayuserAccountModalDisplay } from "../app/Slices/Slices";
import UserAccountMenuModal from "../components/UserAccountMenu.Modal";
const Cart = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state)=>state.Slice.AuthenticationState);
  
  
  if(authState == true) {
  return (<CartComponentMain/>);
  } else if(authState == false) {
    dispatch(displayuserAccountModalDisplay());
    return (
      <Flex w='100%' h='100vh' justify='center' align='center'>
      <Text fontSize={20} fontWeight='600'>Login First</Text>
      </Flex>
    )
  }
}

export default Cart
