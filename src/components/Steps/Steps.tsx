import react, { useState } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Flex,
  Heading,
  Button,
  FormControl,
  RadioGroup,
  HStack,
  useRadioGroup,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import RadioCard from "components/RadioCard/RadioCard";
import { obj } from "components/SystemSteps/SystemSteps";

const steps = [
  { label: "Sistemas", Content: obj.sistemas },
  { label: "Processos", Content: obj.processos },
  { label: "Pessoas", Content: obj.pessoas },
  { label: "Ferramentaria", Content: obj.ferramentarias },
  { label: "Design", Content: obj.designs },
  { label: "Teste", Content: obj.testes },
  { label: "Computacionais", Content: obj.computacionais },
];

const StepsForm = () => {
  const options = ["Sim", "Não"];
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "option",
    defaultValue: "none",
  });

  const group = getRootProps();
  const colorButtonSend = useColorModeValue("#8e6dd1", "#fff");
  const buttonSendColorMode = useColorModeValue("#fff", "#5030DD");
  const buttonSendHover = useColorModeValue("#000000", "#fff");
  const buttonColorHover = useColorModeValue("#fff", "#000000");

  const [valueButton, setValueButton] = useState('');
  const [testValue, setTestValue] = useState('');

  const handleValueButton = (value: string) => {
    setValueButton(valueButton)
  }

  const testLog = (a: string) => {
    console.log(a);
  }
  
  

  return (
    <Flex as="section" flexDir={"column"} width="100%">
      <Progress
        colorScheme="green"
        size="sm"
        value={5}
        max={18}
        marginBottom={12}
      />
      <Steps activeStep={activeStep}>
        {steps.map(({ label, Content }, index) => (
          <Step label={label} key={label}>
            {Content.map((quest) => (
              <Flex>
                {quest}
              </Flex>
            ))}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDir="column">
          <Heading fontSize="xl" textAlign="center">
            Teste Concluido
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            <ArrowBackIcon />
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : <ArrowForwardIcon />}
          </Button>
          {testValue}
        </Flex>
      )}

      {
        //aq em baixo são os botao sim ou não
      }
      <FormControl
        as="fieldset"
        display="flex"
        alignItems="center"
        flexDir="column"
      >
        <RadioGroup defaultValue="none" mb={5} display="flex" >
          <HStack color="#fff" spacing="80px" {...group} onChange={() => testLog('Sim')}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              if (value === "Sim") {
              return (
                <RadioCard key={value} {...radio} setValueButton={setValueButton} >
                  {value}
                </RadioCard>
              );
              }
            })}
            {/* {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })} */}
          </HStack>
          <HStack color="#fff" spacing="80px" {...group} onChange={() => testLog('Não')}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              if (value === "Não") {
              return (
                <RadioCard key={value} {...radio} setValueButton={setValueButton} >
                  {value}
                </RadioCard>
              );
              }
            })}
            {/* {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })} */}
          </HStack>
        </RadioGroup>
        <Button
          bgColor={buttonSendColorMode}
          color={colorButtonSend}
          letterSpacing="tight"
          _hover={{ background: buttonSendHover, color: buttonColorHover }}
        >
          Next Question <ArrowForwardIcon w={8} h={5} />
        </Button>
      </FormControl>
    </Flex>
  );
};

export default StepsForm;
