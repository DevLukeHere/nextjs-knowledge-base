import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const BoxStyled = styled(Box)((props) => ({
  paddingTop: "3.5rem",
  paddingBottom: "2.5rem",
}));

export const TitleText = styled(Typography)((props) => ({
  fontWeight: "700",
  color: Colors.black,
  textAlign: "center",
  lineHeight: "2.5rem",
  marginBottom: "0.5rem",
  padding: "0 1rem",
}));

export const SubtitleText = styled(Typography)((props) => ({
  fontWeight: "400",
  color: Colors.black,
  textAlign: "center",
  lineHeight: "1.5rem",
  padding: "0 1rem",
}));
