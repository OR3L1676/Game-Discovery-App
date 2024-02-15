import { Button, Menu, MenuButton, MenuIcon, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectItem: ()
}

const SortSelector = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {}
        </MenuButton>
        <MenuList></MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
