// src/hooks/useQuery.ts
import { useState, useEffect } from "react";

interface QueryOptions {
  enabled?: boolean;
  refetchInterval?: number;
}

interface QueryResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  statusCode: number | null;
  refetch: (params?: any) => void;
}

const cache: Record<string, { data: any; statusCode: number }> = {};

function useQuery<T>(
  key: string,
  fetcher: (params?: any) => Promise<T>,
  options?: QueryOptions,
  initialParams?: any
): QueryResult<T> {
  const [data, setData] = useState<T | null>(
    (cache[key] && cache[key].data) || null
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(!cache[key]);
  const [statusCode, setStatusCode] = useState<number | null>(
    (cache[key] && cache[key].statusCode) || null
  );
  const [params, setParams] = useState<any>(initialParams);

  const refetch = async (newParams?: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchParams = newParams || params;
      const response = await fetcher(fetchParams);
      const responseData = (response as any).data;
      setData(responseData);
      let status = (response as any).status ?? 200;
      setStatusCode(status);
      cache[key] = { data: response, statusCode: 200 };
      if (newParams) {
        setParams(newParams);
      }
    } catch (err: any) {
      const errorMessage = err.message || "An unknown error occurred";
      const errorCode = err.response?.status || 500;
      setError(errorMessage);
      setStatusCode(errorCode);
      cache[key] = { data: null, statusCode: errorCode };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (options?.enabled === false) {
      return;
    }
    refetch();
    if (options?.refetchInterval) {
      const interval = setInterval(refetch, options.refetchInterval);
      return () => clearInterval(interval);
    }
  }, [key, options?.enabled, options?.refetchInterval]);

  return { data, error, isLoading, statusCode, refetch };
}

export default useQuery;
