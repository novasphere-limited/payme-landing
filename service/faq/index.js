import { routes } from "../apiroutes";
import HttpService from "../httpServices";
import useFetchItem from "../useFetchItem";

const httpService = new HttpService();

export const useGetFAQs = () => {
  const { isLoading, error, data, refetch, setFilter, filter } = useFetchItem({
    queryKey: ["fetchfaqposts"],
    queryFn: (queryParams) => {
      return httpService.getDataWithoutToken(routes.getFAQs(queryParams));
    },
    retry: 1,
    staleTime: 0,
  });

  return {
    faqsContentIsLoading: isLoading,
    faqsContentData: data?.data?.data || [],
    faqsContentFilter: filter,
    faqsContentError: ErrorHandler(error),
    refetchFaqContent: refetch,
    setFaqContentFilter: setFilter,
  };
};

export const useGetFaqInfo = ({ enabled = false }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["faqInfo"],
      queryFn: (id) => {
        return httpService.getData(routes.getFaq(id));
      },
      enabled,
      retry: 2,
      staleTime: 0,
    });

  return {
    getFaqInfoIsfetching: isFetching,
    getFaqInfoIsFetched: isFetched,
    getFaqInfoIsLoading: isLoading,
    getFaqInfoData: data?.data?.data || {},
    refreshGetFaqInfo: refetch,
    filterGetFaqInfo: setFilter,
  };
};
