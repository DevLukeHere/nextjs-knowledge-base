import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Colors from "../../colors/colors";

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)({
  color: Colors.primaryGrey,
  width: "0.75rem",
  height: "0.75rem",
  margin: "0 1rem",
});

export const SkeletonStyled = styled(Skeleton)({
  width: "12.5rem",
  height: "0.75rem",
});

export const BoxStyled = styled(Box)({
  backgroundColor: Colors.secondaryGrey,
  padding: "1.25rem 4rem",
  display: "flex",
  alignItems: "center",
});

export const MainCategoryText = styled("p")({
  color: Colors.primary,
  fontWeight: "400",
  fontSize: "0.75rem",
});

export const SubCategoryText = styled("p")({
  color: Colors.primaryGrey,
  fontWeight: "400",
  textTransform: "capitalize",
  fontSize: "0.75rem",
});
