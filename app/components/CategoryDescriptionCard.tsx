"use client";

import {
  BoxStyled,
  TitleText,
  UpdatedText,
  DividerStyled,
  DescriptionText,
  FontAwesomeIconStyled,
} from "./styles/CategoryDescriptionCard.styles";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import PlayIcon from "../../public/images/play.svg";

export default function CategoryDescriptionCard() {
  return (
    <BoxStyled>
      <Image src={PlayIcon} width={55} height={55} alt="play icon" />
      <TitleText variant="h5">getting started</TitleText>
      <UpdatedText variant="caption">Updated 2 weeks ago</UpdatedText>
      <DividerStyled></DividerStyled>
      <FontAwesomeIconStyled icon={faCircleInfo} />
      <DescriptionText variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sed
        ad adipisci, dolorum fugit suscipit aliquid molestiae reprehenderit
        quasi tenetur?
      </DescriptionText>
    </BoxStyled>
  );
}
