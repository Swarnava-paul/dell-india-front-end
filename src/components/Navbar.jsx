import { Box , Flex} from "@chakra-ui/react"

import {FirstSectionNavbar,
SecondSection
} from '../components/Exports.components'

const Navbar = () => {
  return (
    <Box boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px;" pt={1} >
    <FirstSectionNavbar/>
    <SecondSection/>
    </Box>
  )
}

export default Navbar
