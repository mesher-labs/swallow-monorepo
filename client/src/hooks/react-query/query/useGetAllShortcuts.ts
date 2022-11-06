import { useQuery, useQueryClient } from "react-query";

interface UserParams {
  name: string;
  value: string;
}

interface Shortcut {
  isReady: boolean;
  endpoint: string;
  contractAddr: string;
  userParams: UserParams[];
  shortcutType: string;
}

// TODO : the graph로 교체
const getAllShortcuts = (): Shortcut[] => {
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
      isReady: false,
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
      shortcutType: "swap",
    },
    {
      isReady: false,
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
      shortcutType: "swap",
    },
    {
      isReady: false,
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
      shortcutType: "swap",
    },
  ];
};

export const useGetAllShortcuts = () => {
  const queryClient = useQueryClient();
  return useQuery(["allShortcuts"], () => getAllShortcuts);
};
