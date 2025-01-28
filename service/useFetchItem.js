import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useFetchItem({
  initialPage,
  initialPageSize,
  queryFn,
  queryKey,
  retry,
  enabled,
  initialFilter,
  isPaginated,
  staleTime,
}) {
  const [pageNumber, setPageNumber] = useState(initialPage || 1);
  const [pageSize, setPageSize] = useState(initialPageSize || 10);
  const [filter, setFilter] = useState(initialFilter ?? {});

  const params = isPaginated ? { pageNumber, pageSize, ...filter } : filter;

  const query = useQuery({
    queryKey: [...queryKey, params, retry],
    queryFn: () => queryFn(params),
    retry: retry || false,
    enabled,
    ...(staleTime !== undefined && { staleTime }),
    keepPreviousData: isPaginated ? true : false,
  });

  return {
    ...query,
    pageNumber,
    pageSize,
    setPageNumber,
    setPageSize,
    setFilter,
  };
}
