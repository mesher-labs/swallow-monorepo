type ShortCutTypes =
  | "SEND"
  | "BUY"
  | "AAVE_CURRENT_APY"
  | "MULTI_SEND"
  | "TOKEN_BALANCE";

const ShortCutTypes = {
  SEND: "SEND",
  BUY: "BUY",
  AAVE_CURRENT_APY: "AAVE_CURRENT_APY",
  MULTI_SEND: "MULTI_SEND",
  TOKEN_BALANCE: "TOKEN_BALANCE",
} as const;

interface HomePresenterProps {
  shortCutTypes: ShortCutTypes;
}

const getTargetComponents = (shortCutTypes: ShortCutTypes) => {
  // TODO : 타입에 맞는 컴포넌트 리턴해주기
  // 단 유저가 보유하지 않은 숏컷이면 디폴트를 리턴해주기
};

export const HomePresenter = ({ shortCutTypes }: HomePresenterProps) => {
  return <>HomePresenter</>;
};
