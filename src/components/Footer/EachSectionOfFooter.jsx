import { Grid , Text , Box} from "@chakra-ui/react"

const EachSectionOfFooter = ({props}) => {
  const {head,subMenu} = props;
  return (
   <Box h='25vh'>
     <Text fontWeight='600' fontFamily='sans-serif' fontSize={16}>{head}</Text>
     <Grid   h='auto' rowGap={2} mt={3}>
    {
      subMenu.map((i,index)=>(
        <Text key={index}>{i}</Text>
      ))
     }
     </Grid>
   </Box>
  )
}

export default EachSectionOfFooter
