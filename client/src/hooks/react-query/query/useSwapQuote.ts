import { useQuery, useQueryClient } from "react-query";
import zeroXApiService from "../../../common/services/zeroX.api.service";

export const useSwapQuote = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["swapQuote"],
    queryFn: () => zeroXApiService.getSwapQuote(),
  });
};
