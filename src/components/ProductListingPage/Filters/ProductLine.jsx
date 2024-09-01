import React from 'react'
import CheckBox from './CheckBox'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'

const ProductLine = () => {

  const [productsModels,setProductModels] = useState([
    'XPS',
    'Latitude',
    'Inspiron',
    'Vostro',
    'Alienware',
    'G series'
  ])

  return (
   <Box h='35vh'>
     <CheckBox array={productsModels} type={'model'} head={'Product Line'} />
   </Box>
  )
}

export default ProductLine
