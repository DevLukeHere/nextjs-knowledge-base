import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

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

export const SkeletonStyled = styled(Skeleton)((props) => ({
  borderRadius: "0.25rem",
  marginBottom: "1rem",
}));

export const TitleText = styled("h6")((props) => ({
  color: Colors.black,
  fontWeight: "400",
  fontSize: "1.25rem",
}));

export const UpdatedAtText = styled("p")((props) => ({
  color: Colors.primaryGrey,
  fontWeight: "400",
  fontSize: "0.75rem",
}));

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)((props) => ({
  color: Colors.primary,
  width: "1.5rem",
  height: "1.5rem",
}));
