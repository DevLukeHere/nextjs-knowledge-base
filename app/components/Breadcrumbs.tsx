"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumbs() {
  return (
    <Box>
      <Typography
        sx={{ color: Colors.primary, fontWeight: "400" }}
        variant="caption"
      >
        All categories
      </Typography>
      <FontAwesomeIcon
        style={{
          color: Colors.primaryGrey,
          width: "0.75rem",
          height: "0.75rem",
          margin: "0 1rem",
        }}
        icon={faChevronRight}
      />
      <Typography
        sx={{
          color: Colors.primaryGrey,
          fontWeight: "400",
          textTransform: "capitalize",
        }}
        variant="caption"
      >
        getting started
      </Typography>
    </Box>
  );
}
