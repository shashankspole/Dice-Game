import React from "react";
import styled from "styled-components";
import diceImg from "../assets/images/dices.png";
import Button from "../styled/Button.js";

const Playgame_Page = ({ toggle }) => {
  return (
    <Container>
      <DiceImg>
        <img src={diceImg} alt="dice..." />
      </DiceImg>

      <DiceDiv>
        <DiceTitle>DICE GAME</DiceTitle>
        <DiceBtnDiv>
          <Button onClick={toggle}>Play Now</Button>
        </DiceBtnDiv>
      </DiceDiv>
    </Container>
  );
};

export default Playgame_Page;

const Container = styled.div`
  max-width: 1240px;

  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const DiceImg = styled.div``;

const DiceDiv = styled.div``;

const DiceTitle = styled.h1`
  font-size: 96px;
`;

const DiceBtnDiv = styled.div`
  display: flex;
  justify-content: end;
`;
