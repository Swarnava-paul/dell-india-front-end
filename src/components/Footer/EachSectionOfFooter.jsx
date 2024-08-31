import { Grid , Text , Box , Flex} from "@chakra-ui/react"
import { useState } from "react";

const EachSectionOfFooter = ({props}) => {
  const {head,subMenu} = props;
  return (
    <>
   <Box h='25vh'>
     <Text fontWeight='600' fontFamily='sans-serif' fontSize={16}>{head}</Text>
     <Grid   h='auto' rowGap={2} mt={3}>
    {
      subMenu.map((i,index)=>(
        <Text key={index}>{i}</Text>
      ))
     }
     </Grid>
   </Box> {/** will be only display for large and medius screen sizes */}

   </>
  )
}


export const ResponsiveFooterSmallScreens = ({props,hideIcon,openIcon,paddingLeft}) => {
const [display,setDisplay] =  useState('hide');
const {head,subMenu} = props;
  return (
    <Grid placeItems='center'>
    {
      display === 'hide' ? (
        <>
        <Flex  h='5vh'w='100%' p={8} align='center' justify='space-between' onClick={()=>setDisplay('display')}>
        <Text fontWeight='600' fontFamily='sans-serif' fontSize={16}>{head}</Text>
        {hideIcon}
        </Flex>
        </>
      ) : (
        <Grid  w='100%' transition='0.60s'>
        <Flex  h='5vh'w='100%' p={8} align='center'
         justify='space-between' 
         onClick={()=>setDisplay('hide')}>
        <Text fontWeight='600' fontFamily='sans-serif' fontSize={16}>{head}</Text>
        {openIcon}
        </Flex>
        <Grid pl={paddingLeft} gap={3}>
        {subMenu.map((i,index)=>(
            <Text key={index}>{i}</Text>
          ))}
        </Grid>
        </Grid>
      )
    }
    </Grid>
  )

}

export default EachSectionOfFooter
