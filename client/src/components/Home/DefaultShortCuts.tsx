import styled from "styled-components";
import { useWeb3 } from "../../App";

const AddShortcutSvg = () => {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.4649 30.1764H37.3237V34.4647H41.6119V37.3235H37.3237V41.6117H34.4649V37.3235H30.1766V34.4647H34.4649V30.1764ZM24.459 13.0235H30.1766C30.9348 13.0235 31.662 13.3247 32.1981 13.8608C32.7342 14.397 33.0354 15.1241 33.0354 15.8823V18.7411H38.7531C39.5113 18.7411 40.2385 19.0423 40.7746 19.5785C41.3107 20.1146 41.6119 20.8418 41.6119 21.6V29.5046C40.0967 28.1467 38.0956 27.3176 35.8943 27.3176C33.6196 27.3176 31.4382 28.2212 29.8298 29.8296C28.2214 31.438 27.3178 33.6195 27.3178 35.8941C27.3178 37.4521 27.7323 38.9244 28.4613 40.1823H15.8825C14.2959 40.1823 13.0237 38.8959 13.0237 37.3235V21.6C13.0237 20.0133 14.2959 18.7411 15.8825 18.7411H21.6002V15.8823C21.6002 14.2957 22.8723 13.0235 24.459 13.0235ZM30.1766 18.7411V15.8823H24.459V18.7411H30.1766Z"
        fill="currentColor"
      />
      <circle cx="27" cy="27" r="25.5" stroke="currentColor" stroke-width="3" />
    </svg>
  );
};

export const DefaultSendShortcut = () => {
  const { setServiceState } = useWeb3();
  return (
    <SquareContainer
      onClick={() => setServiceState("AddSendShortcut")}
      color="#F5BF45"
    >
      <h1>
        Add <br /> Send Shortcut
      </h1>
      <AddShortcutSvg />
    </SquareContainer>
  );
};
export const DefaultBuyShortcut = () => {
  const { setServiceState } = useWeb3();
  return (
    <SquareContainer
      onClick={() => setServiceState("AddBuyShortcut")}
      color="#6FEB8E"
    >
      <h1>
        Add
        <br /> Buy Shortcut
      </h1>{" "}
      <AddShortcutSvg />
    </SquareContainer>
  );
};
export const DefaultMultiSendShortcut = () => {
  const { setServiceState } = useWeb3();
  return (
    <RectangleContainer color="#ED797C">
      <h1>
        Add <br /> Multi-Send <br /> Shortcut
      </h1>
      <AddShortcutSvg />
    </RectangleContainer>
  );
};
export const DefaultTokenBalanceShortcut = () => {
  const { setServiceState } = useWeb3();
  return (
    <RectangleContainer
      onClick={() => setServiceState("AddTokenBalanceShortcut")}
      color="#58B9EF"
    >
      <h1>
        Add <br /> Token Balance <br />
        Shortcut
      </h1>
      <AddShortcutSvg />
    </RectangleContainer>
  );
};
export const DefaultAaveCurrentAPYShortcut = () => {
  const { setServiceState } = useWeb3();
  return (
    <RectangleContainer
      onClick={() => setServiceState("AddAaveShortcut")}
      color="#B682F7"
    >
      <h1>
        Add <br />
        Aave Current APY Shortcut
      </h1>
      <AddShortcutSvg />
    </RectangleContainer>
  );
};

interface ContainerProps {
  color: string;
}

const SquareContainer = styled.div<ContainerProps>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: left;
  padding: 26px;
  color: ${({ color }) => `${color}40`};

  border: 3px dashed ${({ color }) => color};
  border-radius: 20px;
  width: 252px;
  height: 252px;
  border-radius: 20px;

  svg > path {
    color: ${({ color }) => `${color}40`};
  }

  svg > circle {
    color: ${({ color }) => `${color}40`};
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: ${({ color }) => `${color}40`};

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    color: rgba(255, 255, 255, 0.8);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

interface RectangleContainerProps extends ContainerProps {}

const RectangleContainer = styled.div<RectangleContainerProps>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: 3px dashed ${({ color }) => color};
  border-radius: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 26px;
  color: ${({ color }) => `${color}40`};
  width: 521px;
  height: 252px;
  border-radius: 20px;

  svg {
    margin: 0 auto;
  }

  svg > path {
    color: ${({ color }) => `${color}40`};
  }

  svg > circle {
    color: ${({ color }) => `${color}40`};
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;

    color: ${({ color }) => `${color}40`};

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    color: rgba(255, 255, 255, 0.8);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
