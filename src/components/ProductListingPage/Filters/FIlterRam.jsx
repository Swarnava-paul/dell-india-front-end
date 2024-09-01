import React from 'react'
import CheckBox from './CheckBox'
import { Box } from '@chakra-ui/react'

const FIlterRam = () => {
  const array = [
'64 GB',

'32 GB',

'16 GB',

'8 GB',
  ]
  return (
   <Box h='30vh'>
    <CheckBox array={array} head={'Memory (RAM)'} type={'ram'}/>
   </Box>
  )
}

export default FIlterRam
