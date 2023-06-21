"use client";

import { Fragment } from "react";
import {
  BoxStyled,
  FontAwesomeIconStyled,
  MainCategoryText,
  SkeletonStyled,
  SubCategoryText,
} from "./styles/Breadcrumbs.styles";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import useCategory from "../hooks/useCategory";

export default function Breadcrumbs() {
  const router = useParams();
  const { category, isLoading } = useCategory(router.id);

  return (
    <Fragment>
      {isLoading ? (
        <BoxStyled>
          <SkeletonStyled variant="rectangular" />
        </BoxStyled>
      ) : (
        <BoxStyled>
          <MainCategoryText>All categories</MainCategoryText>
          <FontAwesomeIconStyled icon={faChevronRight} />
          <SubCategoryText>{category?.title}</SubCategoryText>
        </BoxStyled>
      )}
    </Fragment>
  );
}
