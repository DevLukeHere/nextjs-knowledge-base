"use client";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme";
import Container from "@mui/material/Container";
import Colors from "../colors/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import PlayIcon from "../../public/images/play.svg";
import DiamondIcon from "../../public/images/diamond.svg";
import MessageIcon from "../../public/images/message-bubble.svg";
import MonitorIcon from "../../public/images/monitor.svg";
import LinkIcon from "../../public/images/link.svg";
import ShoppingCartIcon from "../../public/images/shopping-cart.svg";

const BoxStyled = styled(Container)({
  padding: "2rem",
  textAlign: "center",
  borderRadius: "0.25rem",
  backgroundColor: Colors.white,
  width: "19.75rem",
  height: "13.75rem",
  cursor: "pointer",
  border: `1px solid ${Colors.tertiaryGrey}`
});

const CategoryCardSection = styled(Box)((props) => ({
  backgroundColor: Colors.secondaryGrey,
  paddingTop: "3.75rem",
  paddingBottom: "6.25rem",
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto",
  rowGap: "1.25rem",

  [props.theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
  },

  [props.theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
  },
}));

export default function CategoryCard() {
  // const dispatch = useAppDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <CategoryCardSection>
      {/* Getting Started Card */}
      <BoxStyled>
        <Image src={PlayIcon} width={44} height={55} alt="play icon" />
        <Typography
          sx={{
            textTransform: "capitalize",
            color: Colors.black,
            marginBottom: "1.25rem",
          }}
          variant="h6"
        >
          getting started
        </Typography>
        <Typography sx={{ color: Colors.primary }} variant="body2">
          5 articles
        </Typography>
        <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
          Last update 2 days ago
        </Typography>
      </BoxStyled>

      {/* Chat Widget Card */}
      <BoxStyled>
        <Image src={MessageIcon} width={55} height={55} alt="chat icon" />
        <Typography
          sx={{
            textTransform: "capitalize",
            color: Colors.black,
            marginBottom: "1.25rem",
          }}
          variant="h6"
        >
          chat widget customization
        </Typography>
        <Typography sx={{ color: Colors.primary }} variant="body2">
          9 articles
        </Typography>
        <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
          Last update 2 days ago
        </Typography>
      </BoxStyled>

      {/* Using Dashboard Card */}
      <BoxStyled>
        <Image src={MonitorIcon} width={55} height={55} alt="monitor icon" />
        <Typography
          sx={{
            textTransform: "capitalize",
            color: Colors.black,
            marginBottom: "1.25rem",
          }}
          variant="h6"
        >
          using the dashboard
        </Typography>
        <Typography sx={{ color: Colors.primary }} variant="body2">
          12 articles
        </Typography>
        <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
          Last update 2 days ago
        </Typography>
      </BoxStyled>

      {/* Advanced Features Card */}
      <BoxStyled>
        <Image src={DiamondIcon} width={55} height={55} alt="diamond icon" />
        <Typography
          sx={{
            textTransform: "capitalize",
            color: Colors.black,
            marginBottom: "1.25rem",
          }}
          variant="h6"
        >
          advanced features
        </Typography>
        <Typography sx={{ color: Colors.primary }} variant="body2">
          5 articles
        </Typography>
        <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
          Last update 2 days ago
        </Typography>
      </BoxStyled>

      {/* Integrations Card */}
      <BoxStyled>
        <Image src={LinkIcon} width={55} height={55} alt="link icon" />
        <Typography
          sx={{
            textTransform: "capitalize",
            color: Colors.black,
            marginBottom: "1.25rem",
          }}
          variant="h6"
        >
          integrations
        </Typography>
        <Typography sx={{ color: Colors.primary }} variant="body2">
          14 articles
        </Typography>
        <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
          Last update 2 days ago
        </Typography>
      </BoxStyled>

      {/* E-commerce Card */}
      <BoxStyled>
        <Image
          src={ShoppingCartIcon}
          width={44}
          height={55}
          alt="shopping cart icon"
        />
        <Typography
          sx={{
            textTransform: "capitalize",
            color: Colors.black,
            marginBottom: "1.25rem",
          }}
          variant="h6"
        >
          e-commerce integrations
        </Typography>
        <Typography sx={{ color: Colors.primary }} variant="body2">
          10 articles
        </Typography>
        <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
          Last update 2 days ago
        </Typography>
      </BoxStyled>
    </CategoryCardSection>
  );
}
