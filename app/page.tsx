"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Colors from "./colors/colors";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <main>
      <Box sx={{ paddingTop: "3.5rem", paddingBottom: "2.5rem" }}>
        <Typography
          sx={{
            fontWeight: "700",
            color: Colors.black,
            textAlign: "center",
            lineHeight: "2.5rem",
            marginBottom: "0.5rem",
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
          }}
          variant="h6"
        >
          Everything you need to manage your messaging
        </Typography>
      </Box>
      <Searchbar />
    </main>
  );
}
