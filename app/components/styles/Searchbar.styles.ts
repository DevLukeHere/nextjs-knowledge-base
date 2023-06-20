import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

export const ContainerStyled = styled(Container)({
  paddingBottom: "4.75rem",
  textAlign: "center",
});

export const TextFieldStyled = styled(TextField)({
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