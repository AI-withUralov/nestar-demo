import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TopAgentsCard from "./TopAgentsCard";

const TopAgents = ({ initialInput, ...props }: any) => {
  const [topAgents, setTopAgents] = useState<number[]>(initialInput);

  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>These are our best Top Agents</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <span>See All Agents</span>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"wrapper"}>
          <Box className={"switch-btn swiper-agents-prev"}>
            <ArrowBackIosNewIcon />
          </Box>
          <Box className={"card-wrapper"}>
            <Swiper
              className={"top-agents-swiper"}
              slidesPerView={"auto"}
              spaceBetween={29}
              navigation={{
                nextEl: ".swiper-agents-next",
                prevEl: ".swiper-agents-prev",
              }}
              pagination={{
                el: ".swiper-agents-pagination",
              }}
            >
              {topAgents.map((property, index) => {
                return (
                  <Stack key={index} className={"top-agents-slide"}>
                    <TopAgentsCard />
                  </Stack>
                );
              })}
            </Swiper>
          </Box>
          <Box className={"switch-btn swiper-agents-next"}>
            <ArrowBackIosNewIcon />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

TopAgents.defaultProps = {
  initialInput: [1, 2, 3, 4, 5],
};

export default TopAgents;