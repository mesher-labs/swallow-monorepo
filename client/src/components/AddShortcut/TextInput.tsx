import styled from "styled-components";
import { COLORS } from "../../common/constants/colors";

const S = {
  Form: styled.div<{ width?: string }>`
    width: ${(props) => props.width || "166px"};
  `,
  FormInput: styled.input`
    color: white;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    background: transparent;
    border: none;
    width: 100%;
    padding-left: 10px;
    input::placeholder {
      font-size: 18px;
    }
  `,
  BottomLine: styled.div`
    background: #d9d9d9;
    border-radius: 5px;
    width: 100%;
    height: 2px;
    margin-top: 11.5px;
  `,
};

interface Props {
  placeHodler: string;
  amount: string;
  onChangeHanlder: (e: React.FormEvent<HTMLInputElement>) => void;
  width?: string;
}

export const TextInput = ({
  placeHodler,
  amount,
  onChangeHanlder,
  width,
}: Props) => {
  return (
    <S.Form width={width}>
      <S.FormInput
        placeholder={placeHodler}
        value={amount}
        onChange={onChangeHanlder}
      ></S.FormInput>
      <S.BottomLine></S.BottomLine>
    </S.Form>
  );
};
