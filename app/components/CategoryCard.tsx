"use client";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import useCategories from "../hooks/useCategories";
import dayjs from "dayjs";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import Colors from "../colors/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
  border: `1px solid ${Colors.tertiaryGrey}`,
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
  const { categories, isLoading, isValidating } = useCategories();

  console.log("categories:", categories);

  return (
    <CategoryCardSection>
      {categories?.map((category: any) => (
        <BoxStyled key={category.id}>
          <Image src={PlayIcon} width={44} height={55} alt="play icon" />
          <Typography
            sx={{
              textTransform: "capitalize",
              color: Colors.black,
              marginBottom: "1.25rem",
            }}
            variant="h6"
          >
            {category.title}
          </Typography>
          <Typography sx={{ color: Colors.primary }} variant="body2">
            {category.totalArticle} articles
          </Typography>
          <Typography sx={{ color: Colors.primaryGrey }} variant="caption">
            Last updated {dayjs(category.updatedOn).format("DD/MM/YYYY")}
          </Typography>
        </BoxStyled>
      ))}
    </CategoryCardSection>
  );
}
