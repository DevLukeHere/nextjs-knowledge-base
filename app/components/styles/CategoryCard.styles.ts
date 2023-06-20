import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import Colors from "../../colors/colors";

export const TitleText = styled("h3")({
  textTransform: "capitalize",
  color: Colors.black,
  marginBottom: "1.25rem",
  fontSize: "1.25rem",
});

export const SubtitleText = styled("p")({
  color: Colors.primary,
  fontSize: "0.875rem",
  margin: "0",
});

export const UpdatedAtText = styled("p")({
  color: Colors.primaryGrey,
  fontSize: "0.75rem",
  margin: "0",
});

export const LinkStyled = styled(Link)({
  textDecoration: "none",
  width: "fit-content",
});

export const SkeletonStyled = styled(Skeleton)({
  width: "19.75rem",
  height: "13.75rem",
  borderRadius: "0.25rem",
  marginLeft: "2rem",
});

export const BoxStyled = styled(Container)({
  padding: "2rem",
  textAlign: "center",
  borderRadius: "0.25rem",
  backgroundColor: Colors.white,
  width: "19.75rem",
  height: "13.75rem",
  cursor: "pointer",
  border: `1px solid ${Colors.tertiaryGrey}`,
});

export const CategoryCardSection = styled(Box)((props) => ({
  backgroundColor: Colors.secondaryGrey,
  paddingTop: "3.75rem",
  paddingBottom: "6.25rem",
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto",
  rowGap: "1.25rem",
  justifyItems: "center",

  [props.theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
  },

  [props.theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
  },
}));
