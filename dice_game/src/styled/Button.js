import styled from 'styled-components'

 export const Button = styled.button`
  background-color: black;
  border: none;
  height: 44px;
  border-radius: 2px;
  padding: 8px, 15px, 8px, 15px;
  width: 220px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  font-size: 15px;
  &:active {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`;

export const OutterButton = styled(Button)`

    background-color: white;
    border: 2px solid black;
    color: black;
    &:active {
    background-color: black;
    border: 2px solid black;
    color: white;
  }
  
`;

export default Button




