"use client";

import {
  BoxStyled,
  TitleText,
  UpdatedText,
  DividerStyled,
  DescriptionText,
  FontAwesomeIconStyled,
  SkeletonStyled,
} from "./styles/CategoryDescriptionCard.styles";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import { Fragment } from "react";
import useCategory from "../hooks/useCategory";
import Image from "next/image";
import dayjs from "dayjs";

dayjs.extend(require("dayjs/plugin/relativeTime"));

export default function CategoryDescriptionCard() {
  const router = useParams();
  const { category, isLoading } = useCategory(router.id);

  return (
    <Fragment>
      {isLoading ? (
        <SkeletonStyled variant="rectangular" />
      ) : (
        <BoxStyled>
          <Image
            src={`/images/${category?.icon}.svg`}
            width={55}
            height={55}
            alt={`${category?.icon} icon`}
          />
          <TitleText variant="h5">{category?.title}</TitleText>
          <UpdatedText variant="caption">
            Updated {dayjs(category?.updatedOn).fromNow()}
          </UpdatedText>
          <DividerStyled></DividerStyled>
          <FontAwesomeIconStyled icon={faCircleInfo} />
          <DescriptionText variant="body2">
            {category?.description}
          </DescriptionText>
        </BoxStyled>
      )}
    </Fragment>
  );
}
