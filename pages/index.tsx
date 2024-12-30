
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NextPage } from "next";
import { Stack } from "@mui/material";
import TrendProperties from "@/libs/homepage/TrendProperties";
import PopularProperties from "@/libs/homepage/PopularProperties";
import Advertisement from "@/libs/homepage/Advertisement";
import TopProperties from "@/libs/homepage/TopProperties";
import TopAgents from "@/libs/homepage/TopAgents";
import withLayoutMain from "@/libs/layout/LayoutHome";


const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);