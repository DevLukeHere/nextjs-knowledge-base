import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Colors from "../../colors/colors";

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

  [props.theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
  },

  [props.theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
  },
}));
