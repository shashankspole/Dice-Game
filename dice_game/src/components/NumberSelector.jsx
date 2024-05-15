import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberSelector = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <SelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            key={i}
            $isSelected={value === selectedNumber}
            onClick={() => numberSelector(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectorContainer>
  );
};

export default NumberSelector;

const SelectorContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    width: 182px;
    height: 36px;
  }

  .error {
    width: 500px;
    font-weight: 400;
    font-size: 20px;
    text-align: end;
    color: red;
  }
`;

const Box = styled.div`
  border: 1px solid black;
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (!props.$isSelected ? "black" : "white")};
`;
