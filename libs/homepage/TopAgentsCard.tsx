
import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentsCard = () => {
  return (
    <Stack className={"top-agents-box"}>
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/profile/girl.svg")`,
        }}
      ></Box>

      <strong>Swetlana</strong>
      <span>Agent</span>
    </Stack>
  );
};

export default TopAgentsCard;
