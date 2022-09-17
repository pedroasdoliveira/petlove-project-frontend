import { Button, useColorModeValue } from "@chakra-ui/react";

const DefaultButton = () => {
  const color = useColorModeValue("#2D3748", "#CBD5E0");
  const buttonBackground = useColorModeValue("#e5e1f9", "#1b1a1e");
  const buttonHover = useColorModeValue("#1b1a1e", "#e5e1f9");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  return (
    <Button
      w={"285px"}
      size={"lg"}
      borderRadius={"20px"}
      variant="ghost"
      background={buttonBackground}
      color={color}
      _hover={{ background: buttonHover, color: buttonColor }}
    >
      Fazer teste
    </Button>
  );
};

export default DefaultButton;
