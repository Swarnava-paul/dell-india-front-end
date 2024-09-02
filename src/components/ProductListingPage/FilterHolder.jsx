import { Grid , Text , Box , Flex} from "@chakra-ui/react"
import { FilterStorage,
ProductLine,
FilterProcessor,
FIlterRam,
FilterGraphicsCard,
FilterPrice
} from "../Exports.components"
// redux
import { useSelector,useDispatch } from "react-redux"
import { hideFilterMenu } from "../../app/Slices/Slices"

const FilterHolder = () => {
  const dispatch = useDispatch();

  return (
    <Grid h='200vh' rowGap={6}>
       <Flex  mt={5} pl={3} justify='space-between' align='center'>
        <Text>Filters</Text>
        <Box display={['block','block','none','none']}><i className="fa-solid fa-x" onClick={()=>dispatch(hideFilterMenu())}></i></Box>
       </Flex>
        <Box bg='RGB(217, 245, 253)' fontSize={10} p={1} margin='auto' width='90%' borderRadius={5}>
        Selecting filter(s) will refresh the results and may change the availability of other options.
        </Box>
     <Grid rowGap={10}>
     <ProductLine/>
      <FilterProcessor/>
      <FIlterRam/>
      <FilterStorage/>
      <FilterPrice/>
      <FilterGraphicsCard/>
     </Grid>
    </Grid>
  )
}

export default FilterHolder
