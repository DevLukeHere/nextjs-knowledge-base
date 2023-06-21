"use client";

import {
  BoxStyled,
  FontAwesomeIconStyled,
  MainCategoryText,
  SubCategoryText,
} from "./styles/Breadcrumbs.styles";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumbs() {
  return (
    <BoxStyled>
      <MainCategoryText>All categories</MainCategoryText>
      <FontAwesomeIconStyled icon={faChevronRight} />
      <SubCategoryText>Getting Started</SubCategoryText>
    </BoxStyled>
  );
}
