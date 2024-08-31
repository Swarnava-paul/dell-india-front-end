import { Grid, Box , Text , Image , Flex , Button } from "@chakra-ui/react"

const HomeThirdSection = () => {
  return (
  <>
  <Box bg='RGB(29, 44, 59)' w='100%' h='auto'
   color='white' display='grid' placeItems='center' fontFamily='sans-serif'>
   <Text fontSize='26px' mt={4}>For You</Text>
   <Grid templateColumns={['130%','100%','50% 50%','40% 30% 25%']} justifyContent='center' gap={5} p={20}>
      <FirstGrid/>
      <RestGrids t1={'Build Your Own Device'} t2={'Order a system that will be built to your personal specifications.'} t3={'Shop Now'}/>
      <RestGrids t1={'Access My Account'} t2={'Sign in to your account to track & view your orders.'} t3={'Sign In'}/>
   </Grid>
  </Box>
  </>
  )
}

const FirstGrid = () => {

    return (
        <>
        <Grid bg='RGBA(245, 246, 247, 0.1)' pr={0} pl={2} pb={2} gap={2}>
            <Text fontSize='28px'>Best Seller</Text>
            <Flex display={['grid','grid','flex','flex']} gap={2}>
            <Image src='https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/lattitue.png'/>
            <Text>Enjoy special prices on our best selling laptops.</Text>
            </Flex>
            <Button bg='RGB(0, 99, 184)' h='7vh' w='40%' margin='auto' borderRadius={4} gap={1}>
            Shop Now
            <i className="fa-solid fa-arrow-right-long"></i>
            </Button>
        </Grid>
        </>
    )
}

const RestGrids = ({t1,t2,t3}) => {
    return (
        <Grid bg='RGBA(245, 246, 247, 0.1)' h='45vh' pl={3} pr={3}>
        <Text fontSize='28px'>{t1}</Text>
        <Text>{t2}</Text>
        <Button bg='RGB(0, 99, 184)' h='7vh' w='60%' margin='auto' borderRadius={4} gap={1}>
        {t3}
        <i className="fa-solid fa-arrow-right-long"></i>
        </Button>
        </Grid>
    )
}

export default HomeThirdSection
