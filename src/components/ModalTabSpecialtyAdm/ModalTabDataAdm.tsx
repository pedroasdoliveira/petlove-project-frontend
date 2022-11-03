import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Flex, Text } from "@chakra-ui/react";
import AllRadarSpecialityAdm from "components/Graphics/AllRadarSpecialityAdm";
import LastRadarUserAdm from "components/Graphics/LastRadarUserAdm";

interface Props {
  user: any;
  specialtyss: any;
  value: any;
}

const ModalTabSpecialtyAdm = ({ user, specialtyss, value }: Props) => {
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
              Último teste e todas especialidades
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
                    <Text fontSize="xl">
                      Último teste -{" "}
                      {value?.nextRole ? value?.nextRole : "Nenhum teste"}
                    </Text>
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
    </Flex>
  );
};

export default ModalTabSpecialtyAdm;
