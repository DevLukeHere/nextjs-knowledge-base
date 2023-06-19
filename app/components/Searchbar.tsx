"use client";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ContainerStyled = styled(Container)({
  paddingBottom: "4.75rem",
  textAlign: "center",
});

const TextFieldStyled = styled(TextField)({
  ".MuiInputBase-root": {
    borderRadius: "0.25rem 0 0 0.25rem",
  },
});

export default function Searchbar() {
  // const dispatch = useAppDispatch();

  return (
    <ContainerStyled>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextFieldStyled
          sx={{ width: "45rem" }}
          id="search-bar"
          label="Search for answers"
          variant="outlined"
        />
        <Button
          sx={{
            backgroundColor: Colors.primary,
            width: "5rem",
            height: "3.5rem",
            borderRadius: "0 0.25rem 0.25rem 0",
            color: Colors.white,

            ":hover": {
              backgroundColor: Colors.primary,
            },
          }}
        >
          <FontAwesomeIcon
            style={{ width: "1.25rem", height: "1.25rem" }}
            icon={faMagnifyingGlass}
          />
        </Button>
      </Box>
    </ContainerStyled>
  );
}
