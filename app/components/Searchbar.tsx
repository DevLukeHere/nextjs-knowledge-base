"use client";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BoxStyled = styled(Box)({
  marginTop: "1rem",
  textAlign: "end",
});

export default function Searchbar() {
  const dispatch = useAppDispatch();

  return (
    <BoxStyled>
      <Typography variant="body1">Searchbar component</Typography>
    </BoxStyled>
  );
}
