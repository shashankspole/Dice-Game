import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import DiceRole from "./DiceRole";
// import Button from "../styled/Button";
import { OutterButton, Button } from "../styled/Button";
import Rules from "./Rules";

const GameStarted = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const rulesDetails = () => {
    setShowRule((prev) => !showRule);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <DiceRole currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <OutterButton onClick={resetScore}>Reset Score</OutterButton>
        <Button onClick={rulesDetails}>
          {showRule ? "Hide " : "Show "}
          Rules
        </Button>
      </div>
      {showRule && <Rules />}
    </MainContainer>
  );
};

export default GameStarted;

const MainContainer = styled.div`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btn {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
