"use client";

import { BoxStyled } from "./styles/Breadcrumbs.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Colors from "../colors/colors";

export default function Breadcrumbs() {
  return (
    <BoxStyled>
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
    </BoxStyled>
  );
}
