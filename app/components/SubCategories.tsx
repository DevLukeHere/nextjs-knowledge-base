"use client";

import { Fragment } from "react";
import { SubCategorySection } from "./styles/SubCategories.styles";
import SubCategoryCard from "./SubCategoryCard";
import CategoryDescriptionCard from "./CategoryDescriptionCard";
import Breadcrumbs from "./Breadcrumbs";

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
