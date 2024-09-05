import { Grid , Text , Flex , Box} from "@chakra-ui/react"
const ProductInfoForSelectedProductCard = ({props}) => {
const {
        model,display,graphics,os,processor,
        ram,storage
} = props;

const info = [{
    name:"Processor",
    value:processor
},
{name:"Os",value:os},
{name:"Graphics",value:graphics},
{name:"Memory",value:ram},
{name:"Storage",value:storage},
{name:"Display",value:display}
]
    
  return (
   <Grid w={['80%','50%','auto','25%']} minW='23%' rowGap={5} ml={6}>
     <Text fontSize={20} fontFamily='sans-serif' color='RGB(0, 99, 184)'>{model}</Text>
     <Box display='grid' gap={7}>
        {
            info.map((i,index)=>(
                <Flex key={index} justify='space-between'>
                    <Text fontSize={14} color='RGB(99, 99, 99)'>{i.name}</Text>
                    <Text fontWeight='600' fontSize={14}>{i.value}</Text>
                </Flex>
            ))
        }
     </Box>
   </Grid>
  )
}

export default ProductInfoForSelectedProductCard

/**
   <Flex w='auto' justify='space-between' gap={12}>
     <Box>
            {info.map((i,index)=><Text key={index} mt={4} fontSize={14} color='RGB(99, 99, 99)'>{i.name}</Text>)}
        </Box>
        <Box w='auto' >
        {info.map((i,index)=><Text fontWeight='600' fontSize={14} key={index} mt={4}>{i.value}</Text>)}
        </Box>
     </Flex>
 */