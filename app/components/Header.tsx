"use client";

import { BoxStyled, TitleText, SubtitleText } from "./styles/Header.styles";

export default function Header() {
  return (
    <BoxStyled>
      <TitleText>
        Knowledge base does not have to be boring
      </TitleText>
      <SubtitleText>
        Everything you need to manage your messaging
      </SubtitleText>
    </BoxStyled>
  );
}
