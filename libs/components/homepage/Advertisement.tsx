import React from "react";
import { Stack } from "@mui/material";

const Advertisement = () => {
  return (
    <Stack className={"video-frame"}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/video/ads.mov" type="video/mp4" />
      </video>
    </Stack>
  );
};

export default Advertisement;