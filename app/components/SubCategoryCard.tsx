"use client";

import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { BoxStyled, SkeletonStyled } from "./styles/SubCategoryCard.styles";
import useCategory from "../hooks/useCategory";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Colors from "../colors/colors";

export default function SubCategoryCard() {
  const { articles, isLoading } = useCategory();

  // console.log("articles:", articles);

  return (
    <Box>
      {isLoading ? (
        <Fragment>
          <SkeletonStyled variant="rectangular" height={96} />
          <SkeletonStyled variant="rectangular" height={96} />
          <SkeletonStyled variant="rectangular" height={96} />
          <SkeletonStyled variant="rectangular" height={96} />
        </Fragment>
      ) : (
        articles
          ?.filter((article: any) => article.status === "published")
          .map((article: any) => (
            <BoxStyled key={article?.id}>
              <FontAwesomeIcon
                style={{
                  color: Colors.primary,
                  width: "1.25rem",
                  height: "1.25rem",
                }}
                icon={faFileLines}
              />
              <Box>
                <Typography
                  sx={{ color: Colors.black, fontWeight: "400" }}
                  variant="h6"
                >
                  {article?.title}
                </Typography>
                <Typography
                  sx={{ color: Colors.primaryGrey, fontWeight: "400" }}
                  variant="caption"
                >
                  Updated {dayjs(article?.updatedOn).format("MMM, DD YYYY")}
                </Typography>
              </Box>
              <IconButton>
                <FontAwesomeIcon
                  style={{ width: "1rem", height: "1rem" }}
                  icon={faChevronRight}
                />
              </IconButton>
            </BoxStyled>
          ))
      )}
    </Box>
  );
}
