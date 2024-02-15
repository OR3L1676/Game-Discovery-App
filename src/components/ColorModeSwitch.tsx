import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="purple"
        ></Switch>
        {colorMode === "dark" ? (
          <Text whiteSpace="nowrap">Dark Mode</Text>
        ) : (
          <Text whiteSpace="nowrap">Light Mode</Text>
        )}
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
