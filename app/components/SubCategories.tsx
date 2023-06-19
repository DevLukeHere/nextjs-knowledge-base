"use client";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Colors from "../colors/colors";
import SubCategoryCard from "./SubCategoryCard";
import CategoryDescriptionCard from "./CategoryDescriptionCard";
import Breadcrumbs from "./Breadcrumbs";

const SubCategorySection = styled(Box)((props) => ({
  backgroundColor: Colors.secondaryGrey,
  padding: "3.75rem 4rem 6.25rem 4rem",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "3.75rem",

  [props.theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto auto",
  },

  [props.theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
  },
}));

export default function SubCategories() {
  return (
    <SubCategorySection>
      {/* <Breadcrumbs /> */}
      <CategoryDescriptionCard />
      <SubCategoryCard />
    </SubCategorySection>
  );
}
