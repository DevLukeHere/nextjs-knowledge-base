"use client";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Colors from "../colors/colors";
import SubCategoryCard from "./SubCategoryCard";
import CategoryDescriptionCard from "./CategoryDescriptionCard";
import Breadcrumbs from "./Breadcrumbs";
import { Fragment } from "react";

const SubCategorySection = styled(Box)((props) => ({
  backgroundColor: Colors.secondaryGrey,
  padding: "0 4rem 6.25rem 4rem",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "3.75rem",

  [props.theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto auto",
    columnGap: "0",
  },

  [props.theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
    columnGap: "0",
  },
}));

export default function SubCategories() {
  return (
    <Fragment>
      <Breadcrumbs />
      <SubCategorySection>
        <CategoryDescriptionCard />
        <SubCategoryCard />
      </SubCategorySection>
    </Fragment>
  );
}
