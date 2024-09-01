import { Grid , Text , Box} from "@chakra-ui/react"
import { FilterStorage,
ProductLine,
FilterProcessor,
FIlterRam,
FilterGraphicsCard,
FilterPrice
} from "../Exports.components"


const FilterHolder = () => {
  return (
    <Grid h='200vh' rowGap={6}>
       <Text mt={2} ml={1}>Filters</Text>
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
