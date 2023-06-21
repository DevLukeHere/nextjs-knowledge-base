"use client";

import { Fragment } from "react";
import { faFileLines, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  BoxStyled,
  FontAwesomeIconStyled,
  SkeletonStyled,
  TitleText,
  UpdatedAtText,
} from "./styles/SubCategoryCard.styles";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import useArticles from "../hooks/useArticles";

interface articleType {
  status: string;
  id: string;
  title: string;
  updatedOn: string;
}

export default function SubCategoryCard() {
  const { articles, isLoading } = useArticles();

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
          ?.filter((article: articleType) => article.status === "published")
          .map((article: articleType) => (
            <BoxStyled key={article?.id}>
              <FontAwesomeIconStyled icon={faFileLines} />
              <Box>
                <TitleText>{article?.title}</TitleText>
                <UpdatedAtText>
                  Updated {dayjs(article?.updatedOn).format("MMM, DD YYYY")}
                </UpdatedAtText>
              </Box>
              <IconButton>
                <FontAwesomeIconStyled icon={faChevronRight} />
              </IconButton>
            </BoxStyled>
          ))
      )}
    </Box>
  );
}
