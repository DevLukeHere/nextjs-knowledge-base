"use client";

import { BoxStyled, TitleText, SubtitleText } from "./styles/Header.styles";

export default function Header() {
  return (
    <BoxStyled>
      <TitleText variant="h4">
        Knowledge base does not have to be boring
      </TitleText>
      <SubtitleText variant="h6">
        Everything you need to manage your messaging
      </SubtitleText>
    </BoxStyled>
  );
}
