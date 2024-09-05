import React from 'react'
import CheckBox from './CheckBox'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'

const ProductLine = () => {

  const [productsModels,setProductModels] = useState([
    'XPS',
    'Latitude',
    'Vostro',
    'Alienware',
    'G series',
    'Precision',
    'Chromebook'
  ])

  return (
   <Box h='45vh'>
     <CheckBox array={productsModels} type={'series'} head={'Product Line'} />
   </Box>
  )
}

export default ProductLine
