import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";

export const BoxStyled = styled(Box)((props) => ({
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
}));
