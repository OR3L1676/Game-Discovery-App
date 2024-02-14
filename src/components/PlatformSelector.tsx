import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";


interface Props {
    onSelectItem: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectItem, selectedPlatform}: Props) => {
    const { data, isLoading, error } = usePlatforms();

    return(
        <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform ? selectedPlatform.name : 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map((data)=> (
                <MenuItem key={data.id} onClick={()=> onSelectItem(data)} >{data.name}</MenuItem>
                ))}
                
            </MenuList>
        </Menu>
        </>
    )
}
export default PlatformSelector;