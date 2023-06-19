"use client";

import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Colors from "../colors/colors";
import Image from "next/image";
import PlayIcon from "../../public/images/play.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const BoxStyled = styled(Box)((props) => ({
  backgroundColor: Colors.white,
  borderRadius: "0.25rem",
  padding: "2.5rem 0",
  textAlign: "center",
  width: "17.5rem",
  border: `1px solid ${Colors.tertiaryGrey}`,

  [props.theme.breakpoints.down("md")]: {
    marginBottom: "2rem",
    width: "100%",
  },
}));

export default function CategoryDescriptionCard() {
  return (
    <BoxStyled>
      <Image src={PlayIcon} width={55} height={55} alt="play icon" />
      <Typography
        sx={{
          color: Colors.black,
          textTransform: "capitalize",
          fontWeight: "700",
          marginTop: "1.5rem",
        }}
        variant="h5"
      >
        getting started
      </Typography>
      <Typography
        sx={{ color: Colors.primaryGrey, fontWeight: "400" }}
        variant="caption"
      >
        Updated 2 weeks ago
      </Typography>
      <Box
        sx={{
          border: `1px solid ${Colors.tertiaryGrey}`,
          margin: "1.25rem 0",
        }}
      ></Box>
      <FontAwesomeIcon
        style={{
          color: Colors.primary,
          marginBottom: "1.25rem",
          width: "1.25rem",
          height: "1.25rem",
        }}
        icon={faCircleInfo}
      />
      <Typography
        sx={{
          color: Colors.primaryGrey,
          fontWeight: "400",
          padding: "0 1.5rem",
        }}
        variant="body2"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sed
        ad adipisci, dolorum fugit suscipit aliquid molestiae reprehenderit
        quasi tenetur?
      </Typography>
    </BoxStyled>
  );
}
