import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <div>
      <TotalScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </TotalScoreContainer>
    </div>
  );
};

export default TotalScore;

const TotalScoreContainer = styled.div`
  text-align: center;
  max-width: 135px;

  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
