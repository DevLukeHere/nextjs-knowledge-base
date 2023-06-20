"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { BoxStyled } from "./styles/SubCategoryCard.styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Colors from "../colors/colors";

export default function SubCategoryCard() {
  return (
    <Fragment>
      <BoxStyled>
        <FontAwesomeIcon
          style={{ color: Colors.primary, width: "1.25rem", height: "1.25rem" }}
          icon={faFileLines}
        />
        <Box>
          <Typography
            sx={{ color: Colors.black, fontWeight: "400" }}
            variant="h6"
          >
            Creating a New Account
          </Typography>
          <Typography
            sx={{ color: Colors.primaryGrey, fontWeight: "400" }}
            variant="caption"
          >
            Updated Jun, 15 2019
          </Typography>
        </Box>
        <IconButton>
          <FontAwesomeIcon
            style={{ width: "1rem", height: "1rem" }}
            icon={faChevronRight}
          />
        </IconButton>
      </BoxStyled>
    </Fragment>
  );
}
