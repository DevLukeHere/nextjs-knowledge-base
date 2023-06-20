import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";

export const BoxStyled = styled(Box)((props) => ({
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