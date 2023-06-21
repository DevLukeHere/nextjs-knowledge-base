import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const ButtonStyled = styled(Button)({
  backgroundColor: Colors.primary,
  width: "5rem",
  height: "3.5rem",
  borderRadius: "0 0.25rem 0.25rem 0",
  color: Colors.white,

  ":hover": {
    backgroundColor: Colors.primary,
  },
});

export const BoxStyled = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)({
  width: "1.25rem",
  height: "1.25rem",
});

export const ContainerStyled = styled(Container)({
  paddingBottom: "4.75rem",
  textAlign: "center",
});

export const TextFieldStyled = styled(TextField)({
  width: "45rem",

  ".MuiInputBase-root": {
    borderRadius: "0.25rem 0 0 0.25rem",
  },

  ".Mui-focused": {
    color: Colors.primary,
    borderColor: Colors.primary,
  },

  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: Colors.primary,
  },
});
