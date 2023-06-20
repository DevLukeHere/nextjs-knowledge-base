"use client";

import { BoxStyled } from "./styles/Header.styles";
import Typography from "@mui/material/Typography";
import Colors from "../colors/colors";

export default function Header() {
  return (
    <BoxStyled>
      <Typography
        sx={{
          fontWeight: "700",
          color: Colors.black,
          textAlign: "center",
          lineHeight: "2.5rem",
          marginBottom: "0.5rem",
          padding: "0 1rem",
        }}
        variant="h4"
      >
        Knowledge base does not have to be boring
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          color: Colors.black,
          textAlign: "center",
          lineHeight: "1.5rem",
          padding: "0 1rem",
        }}
        variant="h6"
      >
        Everything you need to manage your messaging
      </Typography>
    </BoxStyled>
  );
}
