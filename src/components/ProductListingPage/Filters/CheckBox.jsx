import { Grid , Flex , Checkbox , Text} from "@chakra-ui/react"
import { Link } from "react-router-dom";

const CheckBox = ({array,head,type}) => {
  return (
   <Grid pl={4} bg='RGB(245, 246, 247)' rowGap={3} h='100%' pr={2} pt={2}
    fontFamily='sans-serif' fontSize={12} pb={4}>
    <Text>{head}</Text>
    <Grid rowGap={2}>
        {
            array.map((i,index)=>(
                <Flex key={index} gap={2}>
                    <Link to={`/selectedType/${`${type}-${i}`}`}>
                     <input type="checkbox" />
                    </Link>
                    {i}
                </Flex>
            ))
        }
    </Grid>
   </Grid>
  )
}

export default CheckBox;
