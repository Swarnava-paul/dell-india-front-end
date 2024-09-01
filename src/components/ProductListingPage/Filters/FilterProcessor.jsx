
import CheckBox from './CheckBox'
import { Box } from '@chakra-ui/react'

const FilterProcessor = () => {

  const array = [
' Intel i9 Core',

' Intel i7 Core ',

' Intel i5 Core ',

' Intel i3 Core',

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
