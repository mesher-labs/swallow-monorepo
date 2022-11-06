import styled from 'styled-components';
const S = {
  Button : styled.button`
    background: #8660F0;
    border-radius: 38.5px;
    width: 563px;
    height: 77px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 36px;
    display: block;
    margin: 0 auto;
    margin-top: 112px;
    cursor: pointer;
  `
}

interface Props {
  onClickHandler : () => void;
}

export const AddShortCutButton = ({onClickHandler} : Props) => {
  return (
    <S.Button onClick={onClickHandler}>
      Add ShortCuts
    </S.Button>
  )
}