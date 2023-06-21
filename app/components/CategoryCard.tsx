"use client";

import { Fragment } from "react";
import {
  BoxStyled,
  CategoryCardSection,
  SkeletonStyled,
  LinkStyled,
  UpdatedAtText,
  TitleText,
  SubtitleText,
} from "./styles/CategoryCard.styles";
import "dayjs/plugin/relativeTime";
import useCategories from "../hooks/useCategories";
import dayjs from "dayjs";
import Image from "next/image";

dayjs.extend(require("dayjs/plugin/relativeTime"));

interface categoryType {
  enabled: boolean;
  title: string;
  id: string;
  icon: string;
  totalArticle: number;
  updatedOn: string;
}

interface aType {
  order: number;
}
interface bType {
  order: number;
}

export default function CategoryCard() {
  const { categories, isLoading } = useCategories();

  return (
    <CategoryCardSection>
      {isLoading ? (
        <Fragment>
          <SkeletonStyled variant="rectangular" />
          <SkeletonStyled variant="rectangular" />
          <SkeletonStyled variant="rectangular" />
          <SkeletonStyled variant="rectangular" />
          <SkeletonStyled variant="rectangular" />
          <SkeletonStyled variant="rectangular" />
        </Fragment>
      ) : (
        categories
          ?.filter((category: categoryType) => category?.enabled === true)
          .sort((a: aType, b: bType) => a.order - b.order)
          .map((category: categoryType) => (
            <LinkStyled key={category?.id} href={`/category/${category?.id}`}>
              <BoxStyled key={category?.id}>
                <Image
                  src={`/images/${category?.icon}.svg`}
                  width={50}
                  height={55}
                  alt={`${category?.icon} icon`}
                />
                <TitleText>{category?.title}</TitleText>
                <SubtitleText>{category?.totalArticle} articles</SubtitleText>
                <UpdatedAtText>
                  Last updated {dayjs(category?.updatedOn).fromNow()}
                </UpdatedAtText>
              </BoxStyled>
            </LinkStyled>
          ))
      )}
    </CategoryCardSection>
  );
}
