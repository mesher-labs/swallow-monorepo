import { useQuery, useQueryClient } from "react-query";
import { ShortcutTypes } from "../../../common/types/short-cuts.types";

interface UserParams {
  name: string;
  value: string;
}

interface ShortcutRes {
  isReady: boolean;
  endpoint: string;
  contractAddr: string;
  userParams: UserParams[];
  shortcutType: ShortcutTypes;
}

// TODO : the graph로 교체
const getAllShortcuts = async (): Promise<ShortcutRes[]> => {
  return [
    {
      isReady: false,
      endpoint: "",
      contractAddr: "",
      userParams: [],
      shortcutType: "SEND",
    },
    {
      isReady: true,
      endpoint: "https://mumbai.api.0x.org/swap/v1/quote",
      contractAddr: "0x0000000000000000000000000000000000000000",
      userParams: [
        { name: "sellToken", value: "test" },
        { name: "buyToken", value: "test" },
        { name: "sellAmount", value: "test" },
        { name: "buyAmount", value: "test" },
        {
          name: "slippagePercentage",
          value: "test",
        },
      ],
      shortcutType: "BUY",
    },
    {
      isReady: true,
      endpoint: "https://mumbai.api.0x.org/swap/v1/quote",
      contractAddr: "0x0000000000000000000000000000000000000000",
      userParams: [],
      shortcutType: "AAVE_CURRENT_APY",
    },
    {
      isReady: false,
      endpoint: "",
      contractAddr: "",
      userParams: [],
      shortcutType: "MULTI_SEND",
    },
    {
      isReady: false,
      endpoint: "",
      contractAddr: "",
      userParams: [],
      shortcutType: "TOKEN_BALANCE",
    },
  ];
};

export const useGetAllShortcuts = () => {
  const queryClient = useQueryClient();
  return useQuery(["allShortcuts"], () => getAllShortcuts);
};
