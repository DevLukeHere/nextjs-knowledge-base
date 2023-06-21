import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const BoxStyled = styled(Box)((props) => ({
  backgroundColor: Colors.white,
  borderRadius: "0.25rem",
  padding: "2.5rem 0",
  textAlign: "center",
  width: "17.5rem",
  border: `1px solid ${Colors.tertiaryGrey}`,
  height: "fit-content",

  [props.theme.breakpoints.down("md")]: {
    marginBottom: "2rem",
    width: "100%",
  },
}));

export const DividerStyled = styled(Box)((props) => ({
  border: `1px solid ${Colors.tertiaryGrey}`,
  margin: "1.25rem 0",
}));

export const SkeletonStyled = styled(Skeleton)((props) => ({
  borderRadius: "0.25rem",
  width: "17.5rem",
  height: "25.75rem",
}));

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)((props) => ({
  color: Colors.primary,
  marginBottom: "1.25rem",
  width: "1.25rem",
  height: "1.25rem",
}));

export const TitleText = styled("h5")((props) => ({
  color: Colors.black,
  textTransform: "capitalize",
  fontWeight: "700",
  marginTop: "1.5rem",
  fontSize: "1.5rem",
}));

export const UpdatedText = styled("p")((props) => ({
  color: Colors.primaryGrey,
  fontWeight: "400",
  fontSize: "0.75rem",
  margin: "0",
}));

export const DescriptionText = styled("p")((props) => ({
  color: Colors.primaryGrey,
  fontWeight: "400",
  padding: "0 1.5rem",
  fontSize: "0.875rem",
  margin: "0",
}));
