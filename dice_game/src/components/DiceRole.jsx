import React, { useState } from "react";
import styled from "styled-components";
import img_1 from "../assets/images/dices/dice_1.png";
import img_2 from "../assets/images/dices/dice_2.png";
import img_3 from "../assets/images/dices/dice_3.png";
import img_4 from "../assets/images/dices/dice_4.png";
import img_5 from "../assets/images/dices/dice_5.png";
import img_6 from "../assets/images/dices/dice_6.png";

const diceImages = {
  1: img_1,
  2: img_2,
  3: img_3,
  4: img_4,
  5: img_5,
  6: img_6,
};
const DiceRole = ({ currentDice, roleDice }) => {
  return (
    <DiceRoleContainer>
      <div className="dice_img" onClick={roleDice}>
        <img src={diceImages[currentDice]} alt="dice_role" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceRoleContainer>
  );
};

export default DiceRole;

const DiceRoleContainer = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dice_img {
    cursor: pointer;
  }

  p {
    width: 235px;
    font-size: 24px;
    font-weight: 500;
  }
`;
