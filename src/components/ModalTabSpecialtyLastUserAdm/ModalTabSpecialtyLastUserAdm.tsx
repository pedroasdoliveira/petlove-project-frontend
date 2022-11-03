import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  Flex,
  Text,
  Select,
  Button,
} from "@chakra-ui/react";
import LastRadarUserAdm from "components/Graphics/LastRadarUserAdm";
import toast from "react-hot-toast";
import { api } from "services";
import AllRadarSpecialityAdm from "components/Graphics/AllRadarSpecialityAdm";

interface Props {
  user: any;
  value: any;
  handleUserEspeciality: (params: any) => void;
  specialtyss: any;
  colorOption: any;
  handleUserValidate: (params: any) => void;
  requisition: boolean;
  setRequisition: (params: any) => void;
  userValidate: any;
  buttonColorReverse: any;
  buttonColorReverseHover: any;
  userEspeciality: any;
  handleGetUsers: () => void;
  onClose: () => void;
}

const ModalTabSpecialtyLastUserAdm = ({
  user,
  value,
  handleUserEspeciality,
  specialtyss,
  colorOption,
  handleUserValidate,
  requisition,
  setRequisition,
  userValidate,
  buttonColorReverse,
  buttonColorReverseHover,
  userEspeciality,
  handleGetUsers,
  onClose,
}: Props) => {
  return (
    <Flex w={"100%"} h="100%" direction={"column"} alignItems="center">
      <Flex
        w={"100%"}
        h="100%"
        style={{
          background: "rgba(6, 11, 40, 0.94)",
          borderRadius: "10px",
        }}
        direction={"column"}
      >
        <Swiper
          navigation={true}
          modules={[Navigation]}
          style={{ width: "100%", height: "100%" }}
        >
          <SwiperSlide style={{ width: "100%", height: "100%" }}>
            <Text
              position={"absolute"}
              textAlign="center"
              w={"100%"}
              fontSize="xl"
            >
              Teste recente e todas especialidades
            </Text>

            <AllRadarSpecialityAdm user={user} />
          </SwiperSlide>

          {specialtyss?.map((speciality: any) => (
            <SwiperSlide key={speciality.id}>
              <Flex w={"100%"} h="90%" justifyContent="center">
                <Flex w={"50%"} h="100%">
                  <Flex
                    w={"100%"}
                    h="100%"
                    direction={"column"}
                    alignItems="center"
                  >
                    <Text fontSize="xl">Teste recente - {value.nextRole}</Text>
                    <LastRadarUserAdm testUser={value} type="user" />
                  </Flex>
                </Flex>
                <Flex w={"50%"} h="100%">
                  <Flex
                    w={"100%"}
                    h="100%"
                    direction={"column"}
                    alignItems="center"
                  >
                    <Text fontSize="xl">
                      Estimativa - {speciality.performance}
                    </Text>
                    <LastRadarUserAdm
                      testUser={speciality}
                      type="specialities"
                    />
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Flex w={"100%"} h="10%">
        <Flex
          gap={"1rem"}
          w="100%"
          mt={"0.5rem"}
          justifyContent="end"
          textAlign={"center"}
          alignItems="center"
        >
          <Text w="16%">Nova função:</Text>
          <Select
            isRequired={true}
            onChange={handleUserEspeciality}
            defaultValue={value.nextRole}
            w={"12%"}
          >
            {specialtyss?.map((speciality: any) => (
              <option
                key={speciality.id}
                value={speciality.performance}
                style={{
                  background: colorOption,
                  color: "white",
                }}
              >
                {speciality.performance}
              </option>
            ))}
          </Select>
          <Select
            isRequired={true}
            onChange={handleUserValidate}
            defaultValue={""}
            w={"12%"}
          >
            <option
              disabled={true}
              value={""}
              style={{
                background: colorOption,
                color: "#c0c0c0",
              }}
            >
              Aprovado?
            </option>
            <option
              value="Sim"
              style={{
                background: colorOption,
                color: "white",
              }}
            >
              Sim
            </option>
            <option
              value="Não"
              style={{
                background: colorOption,
                color: "white",
              }}
            >
              Não
            </option>
          </Select>

          <Button
            isLoading={requisition}
            background={buttonColorReverse}
            _hover={{
              background: buttonColorReverseHover,
            }}
            onClick={() => {
              if (userValidate !== "") {
                setRequisition(true);
                const token = localStorage.getItem("token");

                const headers = {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                };

                const data = {
                  nextRole: userEspeciality,
                  isValided: userValidate,
                };

                api
                  .patch(`/Result/${value.id}`, data, headers)
                  .then(() => {
                    toast.success("Função atualizada com sucesso!");
                    setRequisition(false);
                    handleGetUsers();
                    onClose();
                  })
                  .catch(() => {
                    toast.error("Erro ao atualizar função!");
                    setRequisition(false);
                  });
              } else {
                toast.error("Selecione se foi aprovado ou não!");
              }
            }}
          >
            Validar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ModalTabSpecialtyLastUserAdm;
