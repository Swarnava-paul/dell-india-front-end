
import CheckBox from './CheckBox'
import { Box } from '@chakra-ui/react'

const FilterProcessor = () => {

  const array = [
' Intel Core i9',

' Intel Core i7 ',

' Intel Core i5 ',

' Intel Core i3',

'AMD Ryzen 9',

'AMD Ryzen 5',

'AMD Ryzen 3',
  ]
 return (
  <Box h='40vh'>
  <CheckBox array={array} head={'Processor'} type={'processor'}/>
  </Box>
 )
}

export default FilterProcessor
