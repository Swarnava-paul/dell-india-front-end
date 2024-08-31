import { Box , Image , Grid , Text , Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const EachSections = ({props,index}) => {
  const {imageUrl,tagLine,head,
    description,buttonName} = props

  return (
   <Box display={['grid','grid','flex','flex']}
   placeItems='center'
   boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
   p={5}
   >
   {
    ((index+1) % 2 == 0 ? (
      <>
      <Grid  minHeight='30vh' maxHeight='auto' pl={4} w={['100%','85%','35%','40%']} gap={5}>
        <Text fontSize='30px' fontWeight='400'>{head}</Text>
        <Text fontWeight='500'>{tagLine}</Text>
        <Text>{description}</Text>
        <Link to={`/selectedType/model ${buttonName}`}>
        <Button color='white'
         h='6vh'
         w='50%'
         borderRadius={5}
         bg='RGB(0, 99, 184)'>Shop {buttonName}</Button>
        </Link>
      </Grid>
      <Image src={imageUrl} w={['80%','65%','50%','50%']}/>
      </>
    ) :(
      <>
      <Image src={imageUrl} w={['80%','65%','50%','50%']}/>
      <Grid  minHeight='30vh' maxHeight='auto' pl={4}  gap={5}
      w={['100%','85%','35%','40%']}>
        <Text fontSize='30px' fontWeight='400'>{head}</Text>
        <Text fontWeight='500'>{tagLine}</Text>
        <Text>{description}</Text>
        <Link to={`/selectedType/model ${buttonName}`}>
        <Button color='white'
         h='6vh'
         w='50%'
         borderRadius={5}
         bg='RGB(0, 99, 184)'>Shop {buttonName}</Button>
        </Link>
      </Grid>
      </>
    ))
   }
   </Box>
  )
}

export default EachSections
