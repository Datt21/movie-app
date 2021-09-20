/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";

const MoviesPagination = () => {
  const { newPage, currentPage, showPagination } = useContext(MovieContext);

  return (
    <div css={styles} className="moviesPagination">
      {showPagination && 
       (
        <Container>
          <React.Fragment>
            <button
              style={{
                cursor: currentPage !== 1 ? "pointer" : "not-allowed",
                background: currentPage !== 1 ? "#80b3ff" : "#303847",
              }}
              onClick={() => newPage("previous")}
            >
              Prev Page
            </button>
            <button onClick={() => newPage("next")}>Next Page</button>
          </React.Fragment>
        </Container>
       )
      }
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        border: none;
        outline: none;
        background: #80b3ff;
        color: #e6e6e6;
        font-size: 20px;
        font-weight: 600;
        border-radius: 4px;
        width: 160px;
        padding: 10px 0;
        cursor: pointer;
        user-select: none;
        margin: 0 10px;
        transition: background 500ms ease-in-out;
        &:hover {
          background: #4d94ff;
        }
      }
    }
  }
`;

export default MoviesPagination;