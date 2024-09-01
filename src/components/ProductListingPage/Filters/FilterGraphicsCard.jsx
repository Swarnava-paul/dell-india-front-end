import React from 'react'
import CheckBox from './CheckBox'
import { Box } from '@chakra-ui/react'
const FilterGraphicsCard = () => {

  const array  = [
    
   ' AMD Graphics',
    'NVIDIA',
    'NVIDIA GeForce',
    'Intel'
  ]
  return (
    

    <Box h='32vh'>
      <CheckBox array={array} head={'Graphics Card'} type={'graphics'}/>
    </Box>
  )
}

export default FilterGraphicsCard
