import { Box, HStack, } from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch'
import SearchInput from "./SearchInput"
const Navbar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Box>LOGO</Box>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}
export default Navbar