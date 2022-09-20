import react from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Heading, Button } from '@chakra-ui/react';
import {ArrowForwardIcon, ArrowBackIcon} from '@chakra-ui/icons'

const Content = (
  <Flex py={4}>
    <p>Testando</p>
  </Flex>
)

const steps = [{ label: "Sistemas", Content}, { label: "Processos", Content }, { label: "Pessoas", Content }, {label: "Tech", Content}];

const StepsForm = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <Flex flexDir={"column"} width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({label, Content}, index) => (
          <Step label={label} key={label}>
            {Content}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDir="column">
          <Heading fontSize="xl" textAlign="center">
            Teste Concluido
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>Reset</Button>
        </Flex> 
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button isDisabled={activeStep === 0} mr={4} onClick={prevStep} size="sm" variant="ghost"><ArrowBackIcon /></Button>
          <Button size="sm" onClick={nextStep}>{activeStep === steps.length - 1 ? "Finish" : <ArrowForwardIcon />}</Button>
        </Flex>
        )}
    </Flex>
  )
};

export default StepsForm;