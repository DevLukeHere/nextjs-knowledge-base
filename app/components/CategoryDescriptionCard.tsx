"use client";

import {
  BoxStyled,
  TitleText,
  UpdatedText,
  DividerStyled,
  DescriptionText,
  FontAwesomeIconStyled,
} from "./styles/CategoryDescriptionCard.styles";
import { useAppSelector } from "../redux/hooks";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import useCategory from "../hooks/useCategory";
import Image from "next/image";
import dayjs from "dayjs";

dayjs.extend(require("dayjs/plugin/relativeTime"));

export default function CategoryDescriptionCard() {
  // const category = useAppSelector(
  //   (state) => state.categoryReducer.currentCategory
  // );
  const { category, isLoading } = useCategory();
  const router = useRouter()

  console.log("category:", category);
  console.log("router:", router);

  return (
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
      <DescriptionText variant="body2">{category?.description}</DescriptionText>
    </BoxStyled>
  );
}
