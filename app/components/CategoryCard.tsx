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
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentCategory } from "../redux/features/categorySlice";
import "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";
import useCategories from "../hooks/useCategories";
import dayjs from "dayjs";
import Image from "next/image";

dayjs.extend(require("dayjs/plugin/relativeTime"));

export default function CategoryCard() {
  const { categories, isLoading } = useCategories();
  const dispatch = useAppDispatch();
  const router = useRouter();

  // console.log("categories:", categories);

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
          ?.filter((category: any) => category.enabled === true)
          .sort((a: any, b: any) => a.order - b.order)
          .map((category: any) => (
            <LinkStyled key={category?.id} href={`/category/${category?.id}`}>
              <BoxStyled>
                <Image
                  src={`/images/${category?.icon}.svg`}
                  width={50}
                  height={55}
                  alt={`${category.icon} icon`}
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
