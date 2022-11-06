import { useQuery, useQueryClient } from "react-query";
import {
  ShortcutTypes,
  ShortcutRes,
} from "../../../common/types/short-cuts.types";

// TODO : the graph로 교체
const getAllShortcuts = (): ShortcutRes[] => {
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
  return useQuery(["allShortcuts"], () => getAllShortcuts());
};
