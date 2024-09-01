import React from 'react'
import CheckBox from './CheckBox'
import { Box } from '@chakra-ui/react'
const FilterStorage = () => {
  const array = [
 ' 1 TB',

'512 GB',
  ]
  return (
    <Box h='22vh'>
      <CheckBox array={array} head={'Storage Size'} type={'storage'}/>
    </Box>
  )
}

export default FilterStorage
