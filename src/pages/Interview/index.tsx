import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import StepsForm from "../../components/Steps/Steps";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useAuth } from "../../contexts/Auth";
import { useEffect } from "react";

const Interview: NextPage = () => {
  const { checkTokenExpiration } = useAuth();
  useEffect(() => {
    checkTokenExpiration!();
  }, []);

  return (
    <Flex
      as="section"
      flexDir="column"
      h="100vh"
      w="100vw"
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
    >
      <Head>
        <title>Teste - Self Awareness</title>
        <meta name="description" content="Questions to answer" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <StepsForm />

      <AsideMenu direction="column" path="Interview" />
    </Flex>
  );
};

export default Interview;
