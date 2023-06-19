"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

export default function SubCategoryCard() {
  return (
    <Fragment>
      <Box
        sx={{
          borderRadius: "0.25rem",
          border: `1px solid ${Colors.tertiaryGrey}`,
          padding: "1.25rem 2.5rem",
          backgroundColor: Colors.white,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          columnGap: "1.75rem",
          alignItems: "center",
          height: "fit-content",
          marginBottom: "1rem",
        }}
      >
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
      </Box>
    </Fragment>
  );
}
