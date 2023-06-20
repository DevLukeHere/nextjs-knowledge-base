"use client";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Fragment } from "react";
import {
  BoxStyled,
  CategoryCardSection,
  SkeletonStyled,
} from "./styles/CategoryCard.styles";
import "dayjs/plugin/relativeTime";
import useCategories from "../hooks/useCategories";
import dayjs from "dayjs";
import Colors from "../colors/colors";
import Typography from "@mui/material/Typography";
import Image from "next/image";

dayjs.extend(require("dayjs/plugin/relativeTime"));

export default function CategoryCard() {
  // const dispatch = useAppDispatch();
  const { categories, isLoading } = useCategories();

  console.log("categories:", categories);

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
            <BoxStyled key={category?.id}>
              <Image
                src={`/images/${category?.icon}.svg`}
                width={44}
                height={55}
                alt={`${category.icon} icon`}
              />
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: Colors.black,
                  marginBottom: "1.25rem",
                }}
                variant="h6"
              >
                {category?.title}
              </Typography>
              <Typography sx={{ color: Colors.primary }} variant="body2">
                {category?.totalArticle} articles
              </Typography>
              <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
                Last updated {dayjs(category?.updatedOn).fromNow()}
              </Typography>
            </BoxStyled>
          ))
      )}
    </CategoryCardSection>
  );
}
